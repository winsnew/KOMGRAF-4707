"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { Matrix3 } from "three";
import Canvas from "./scaling";

export default function Page() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("canvas-container")
      .appendChild(renderer.domElement);

    const lineGeometry = new THREE.BufferGeometry();
    const lineVertices = new Float32Array([
        1, 0, 0,
        2, 3, 0
      ]);;
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(lineVertices, 3));

    camera.position.z = 10
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    
    const translatedLineGeometry = new THREE.BufferGeometry();
    const translatedLineVertices = new Float32Array([
      1 + 3, 0 + 2, 0, 
      2 + 3, 3 + 2, 0  
    ]);
    translatedLineGeometry.setAttribute('position', new THREE.BufferAttribute(translatedLineVertices, 3));

    const translatedLineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const translatedLine = new THREE.Line(translatedLineGeometry, translatedLineMaterial);
    scene.add(translatedLine);
    
    

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  });
  return (
    <div className="container">
      <h1>Matrix Transformasi</h1>
      <p>Translasi, Scaling, Rotation, </p>
      <div id="canvas-container"></div>
      <p>Scaling</p>
      <div>
        
        <Canvas/>
      </div>

    </div>
  );
}
