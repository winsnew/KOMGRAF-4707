"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Clipping = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create clipping plane
    const clippingPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);

    // Set up clipping
    const clippingPlanes = [clippingPlane];
    const materials = cube.material instanceof Array ? cube.material : [cube.material];
    materials.forEach((material) => {
      material.clippingPlanes = clippingPlanes;
      material.clipIntersection = true;
    });

    // Handle mouse movement for interaction
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
      vector.unproject(camera);

      const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
      const intersects = raycaster.intersectObjects([cube]);

      if (intersects.length > 0) {
        // Move clipping plane along with mouse position
        const point = intersects[0].point;
        clippingPlane.constant = -point.x;
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove, false);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.clippingPlanes = clippingPlanes; // Update clipping planes
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose()
    };
  }, []);

  return (
    <>
  <canvas ref={canvasRef} />
  </>
  )
};

export default Clipping;
