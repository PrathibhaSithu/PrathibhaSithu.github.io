import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import flower1 from '../assets/background/flower.png';
import flower2 from '../assets/background/flower2.png';
import flower3 from '../assets/background/flower3.png';
import daisy from '../assets/background/daisy.png';
import rose from '../assets/background/rose.png';

export default function MainBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        camera.position.z = 20;

        // Load flower textures
        const flowerTextures = [
            new THREE.TextureLoader().load(flower1),
            new THREE.TextureLoader().load(flower2),
            new THREE.TextureLoader().load(flower3),
            new THREE.TextureLoader().load(daisy),
            new THREE.TextureLoader().load(rose),
        ];

        const flowerCount = 100;
        const flowers = [];

        const getRandomPosition = () => {
            const aspectRatio = window.innerWidth / window.innerHeight;
            return {
                x: (Math.random() - 0.5) * aspectRatio * 40, // Spread based on screen width
                y: Math.random() * 15 + 5, // Start above the screen
                z: (Math.random() - 0.5) * 40, // More scattered depth
            };
        };

        for (let i = 0; i < flowerCount; i++) {
            const material = new THREE.SpriteMaterial({
                map: flowerTextures[Math.floor(Math.random() * flowerTextures.length)],
                transparent: true,
            });

            const flower = new THREE.Sprite(material);
            flower.scale.setScalar(Math.random() * 0.3 + 0.1); // Random size

            // Random starting position
            const pos = getRandomPosition();
            flower.position.set(pos.x, pos.y, pos.z);

            flower.userData = {
                velocity: Math.random() * 0.05 + 0.02,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
            };

            scene.add(flower);
            flowers.push(flower);
        }

        // Handle resizing
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            flowers.forEach(flower => {
                flower.position.y -= flower.userData.velocity;
                flower.rotation.z += flower.userData.rotationSpeed;

                // Reset flower when it falls below the screen
                if (flower.position.y < -10) {
                    const pos = getRandomPosition();
                    flower.position.set(pos.x, pos.y, pos.z);
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full bg-[#0d0d0d]" />;
}
