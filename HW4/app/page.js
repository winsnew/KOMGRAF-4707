
"use client"
import * as THREE from 'three'
import {useEffect} from 'react'


export default function Page() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);
    
        const xA = 3;
        const yA = 2;
        const zA = 0;
    
        const drawLineBresenham = (x0, y0, x1, y1) => {
          const points = [];
          let dx = Math.abs(x1 - x0);
          let dy = Math.abs(y1 - y0);
          let sx = x0 < x1 ? 1 : -1;
          let sy = y0 < y1 ? 1 : -1;
          let err = dx - dy;
    
          while (true) {
            points.push(new THREE.Vector3(x0, y0, zA));
            if (x0 === x1 && y0 === y1) break;
            let e2 = 2 * err;
            if (e2 > -dy) {
              err -= dy;
              x0 += sx;
            }
            if (e2 < dx) {
              err += dx;
              y0 += sy;
            }
          }
    
          return points;
        };
    
        
        const linePoints = drawLineBresenham(0, 0, xA, yA);
    
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
    
        camera.position.z = 5;
    
        
        const animate = () => {
          requestAnimationFrame(animate);

          renderer.render(scene, camera);
        };
    
        animate();
    
        return () => {
          scene.remove(line);
          renderer.domElement.remove();
        };
      }, []); 
    return (
        <div className='containt'>
            <h3>KOMPUTER GRAFIK - Algoritma Bresenham</h3>
            <p>Koordinat nim : (3201)</p>
        <div id='canvas-container'/>
        </div>
    )
  }