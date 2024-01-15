"use client"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Transformasi3D = () => {
  const canvasRef = useRef();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // cube.rotation.x += 0.1;
      // cube.rotation.y += 0.1;

      // Mengatur skala kubus berdasarkan nilai state scale
      cube.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scale]); // Menambahkan scale sebagai dependensi agar useEffect memperbarui animasi saat skala berubah

  return (
    <div className='relative'>
    <div className='flex gap-2 justify-center'>
      <label htmlFor="scale">Skala</label>
      <input
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={scale}
        onChange={(e) => setScale(parseFloat(e.target.value))}
      />
    </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Transformasi3D;
