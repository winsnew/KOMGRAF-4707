"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Transformation2D = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Inisialisasi Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });


    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Membuat kotak (rectangle) menggunakan Geometry dan Material
    const geometry = new THREE.BoxGeometry(100, 50, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const rectangle = new THREE.Mesh(geometry, material);

    
    scene.add(rectangle);

    // Transformasi Rotasi, Skala, Translasi, Cermin
    rectangle.rotation.z = Math.PI / 2; // Rotasi 
    rectangle.scale.set(1.5, 0.5, 1); // Skala 
    rectangle.position.set(50, 50, 0); // Translasi (posisi x: 50, y: 50)
    rectangle.scale.x *= -1; // Cermin (sumbu x)

    
    camera.position.z = 200;

    
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize window
    window.addEventListener('resize', () => {
      const newWidth = canvasRef.current.clientWidth;
      const newHeight = canvasRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      // Cleanup Three.js scene on component unmount
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={canvasRef} style={{ width: '800px', height: '600px', border: '1px solid #ddd' }} />
    </div>
  );
};

export default Transformation2D;