import { useEffect } from "react";
import * as THREE from "three";

const Canvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("canvas-container")
      .appendChild(renderer.domElement);

    const originalLineGeometry = new THREE.BufferGeometry();
    const originalLineVertices = new Float32Array([1, 0, 0, 2, 3, 0]);
    originalLineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(originalLineVertices, 3)
    );

    const originalLineMaterial = new THREE.LineBasicMaterial({
      color: 0x0000ff,
    });
    const originalLine = new THREE.Line(
      originalLineGeometry,
      originalLineMaterial
    );
    scene.add(originalLine);
    const translationVector = new THREE.Vector3(3, 2, 0);
    originalLine.translateX(translationVector.x);
    originalLine.translateY(translationVector.y);
    originalLine.translateZ(translationVector.z);

    const scaleVector = new THREE.Vector3(2, 2, 1); 
    originalLine.scale.x = scaleVector.x;
    originalLine.scale.y = scaleVector.y;

    // Membuat garis hasil scaling, modif hasilnya dari hasil translasi => scaling
    const scaledLineGeometry = new THREE.BufferGeometry();
    const scaledLineVertices = new Float32Array([
      (1 + 3) * 2,
      0 + 2 * 2,
      0, 
      (2 + 3) * 2,
      (3 + 2) * 2,
      0, 
    ]);
    scaledLineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(scaledLineVertices, 3)
    );

    const scaledLineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const scaledLine = new THREE.Line(scaledLineGeometry, scaledLineMaterial);
    scene.add(scaledLine);

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
  });
  return <div id="canvas-container"/>
};

export default Canvas;
