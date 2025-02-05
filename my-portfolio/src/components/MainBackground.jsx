import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MainBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 5;

        const starGeometry = new THREE.BufferGeometry();
        const starCount = 10000; //1500
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount*3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 100;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({color: 0xffffff,size: 0.1});
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

    })
  return (
    <div>MainBackground</div>
  );
}