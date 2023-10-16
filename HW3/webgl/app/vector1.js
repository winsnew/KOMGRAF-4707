"use client"
import * as THREE from 'three'
import {useEffect, useRef} from 'react'

const VectorKesatu = () => {
    const canvasRef = useRef()
    useEffect(() => {
        function drawLineDDA(x1, y1, x2, y2) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
      
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
      
            const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
      
            const dx = x2 - x1;
            const dy = y2 - y1;
            const steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
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
      
            camera.position.z = 10;
      
            const animate = () => {
              requestAnimationFrame(animate);
              renderer.render(scene, camera);
            };
      
            animate();
          }
          drawLineDDA(4,1,8,12);
          
}, [])
    
    return (
      <div className='canva'>
        <canvas ref={canvasRef}/>
      </div>
    )
}

export default VectorKesatu