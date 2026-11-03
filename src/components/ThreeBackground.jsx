import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Starfield / Constellation
    const particleCount = window.innerWidth < 768 ? 600 : 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0xa855f7);
    const blueColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      // Spread in 3D volume
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      // Randomly pick cyber hues
      const pick = Math.random();
      const chosenColor = pick < 0.45 ? cyanColor : pick < 0.8 ? purpleColor : blueColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.25 : 0.35,
      vertexColors: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.75 : 0.45,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // 2. Floating Cyber Geometric Wireframes
    const icoGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0x00f0ff : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.18 : 0.12
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-16, 6, -10);
    scene.add(icosahedron);

    const torusGeo = new THREE.TorusGeometry(5, 1.2, 8, 24);
    const torusMat = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0xa855f7 : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.16 : 0.1
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(18, -8, -12);
    scene.add(torus);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speedFactor = prefersReducedMotion ? 0.05 : 1;

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate particle cloud
      particles.rotation.y = elapsedTime * 0.02 * speedFactor + targetX * 0.15;
      particles.rotation.x = elapsedTime * 0.01 * speedFactor + targetY * 0.1;

      // Animate geometric shapes
      icosahedron.rotation.x = elapsedTime * 0.15 * speedFactor;
      icosahedron.rotation.y = elapsedTime * 0.2 * speedFactor;
      icosahedron.position.y = 6 + Math.sin(elapsedTime * 0.8) * 1.5;

      torus.rotation.x = elapsedTime * 0.12 * speedFactor;
      torus.rotation.z = elapsedTime * 0.18 * speedFactor;
      torus.position.y = -8 + Math.cos(elapsedTime * 0.7) * 1.5;

      // Subtle camera parallax
      camera.position.x = targetX * 2.5;
      camera.position.y = targetY * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      pMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
}
