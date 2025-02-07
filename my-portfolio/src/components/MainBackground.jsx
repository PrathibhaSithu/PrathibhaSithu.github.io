import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'; // For depth-of-field blur
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
        const getRandomPosition = () => ({
            x: (Math.random() - 0.5) * 40,
            y: Math.random() * 15 + 5,
            z: (Math.random() - 0.5) * 40,
        });

        for (let i = 0; i < flowerCount; i++) {
            const material = new THREE.SpriteMaterial({
                map: flowerTextures[Math.floor(Math.random() * flowerTextures.length)],
                transparent: true,
            });
            const flower = new THREE.Sprite(material);
            flower.scale.setScalar(Math.random() * 0.3 + 0.1);
            const pos = getRandomPosition();
            flower.position.set(pos.x, pos.y, pos.z);
            flower.userData = {
                velocity: Math.random() * 0.05 + 0.02,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
            };
            scene.add(flower);
            flowers.push(flower);
        }

        // Add a glass-like plane in front of the flowers
        const glassGeometry = new THREE.PlaneGeometry(40, 20); // Adjust size to cover the screen
        const glassMaterial = new THREE.MeshBasicMaterial({
            color: 0xfff,
            transparent: true,
            opacity: 0.01, // Semi-transparent
        });
        const glassPlane = new THREE.Mesh(glassGeometry, glassMaterial);
        glassPlane.position.z = -1; // Place it slightly in front of the flowers
        scene.add(glassPlane);

        // Set up post-processing
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        // Add BokehPass for blur effect
        const bokehPass = new BokehPass(scene, camera, {
            focus: 10, // Distance where objects are in focus
            aperture: 0.01, // Strength of the blur
            maxblur: 0.01, // Maximum blur intensity
        });
        composer.addPass(bokehPass);

        // Handle resizing
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            composer.setSize(width, height); // Update composer size
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            flowers.forEach((flower) => {
                flower.position.y -= flower.userData.velocity;
                flower.rotation.z += flower.userData.rotationSpeed;

                if (flower.position.y < -10) {
                    const pos = getRandomPosition();
                    flower.position.set(pos.x, pos.y, pos.z);
                }
            });

            composer.render(); // Use composer instead of renderer.render()
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full bg-[#d2a8d6]" />;
}