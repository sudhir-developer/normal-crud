"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreejsComponent(){
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const width = 700;
        const height = 500;
    
        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
    
        // Camera
        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        );
        camera.position.z = 4;
    
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
    
        mountRef.current?.appendChild(renderer.domElement);
    
        // Texture Loader
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load("/earth.png");
    
        // Globe Geometry
        const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
        // Material (lighting support)
        const material = new THREE.MeshStandardMaterial({
          map: earthTexture,
        });
    
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
    
        // ☀️ Directional Light (Sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);
    
        // 💡 Ambient Light (Soft lighting)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
    
        // ✨ Point Light
        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(-5, -3, 5);
        scene.add(pointLight);
    
        // Animation Loop
        const animate = () => {
          requestAnimationFrame(animate);
    
          globe.rotation.y += 0.002;
    
          renderer.render(scene, camera);
        };
    
        animate();
    
        // Cleanup
        return () => {
          renderer.dispose();
          mountRef.current?.removeChild(renderer.domElement);
        };
      }, []);
    

    return(
        <>
        <div className="grid md:grid-cols-3 gap-8 p-10">
        <div className="bg-white p-6 rounded-xl shadow">
        <div ref={mountRef}></div>
        </div>
        </div>
        </>
    )
}