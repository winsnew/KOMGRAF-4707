"use client"
import {useRef, useEffect } from "react";
import * as THREE from 'three'


const AlgoritmaDDA = () => {
    const canvasRef = useRef();
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        
        const drawDDALine = (x1, y1, x2, y2) => {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  
        const vertices = [];
        const dx = x2 - x1;
        const dy = y2 - y1;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
  
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;
  
        let x = x1;
        let y = y1;
  
        for (let i = 0; i <= steps; i++) {
          vertices.push(x, y, 0);
          x += xIncrement;
          y += yIncrement;
        }
  
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  
        const line = new THREE.Line(geometry, material);
        scene.add(line);
      };
  
      // Panggil fungsi untuk menggambar garis dengan algoritma DDA
      drawDDALine(1, 3, 2, 0);
  
      // Setup kamera
      camera.position.z = 5;
  
      // Render loop
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
    <>
    <div className="flex justify-center">
    <canvas style={{width: '600px', height: '400px'}} ref={canvasRef}/>
    </div>
    </>
    )
}

export default AlgoritmaDDA