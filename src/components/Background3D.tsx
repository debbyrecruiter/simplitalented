import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shape component
function FloatingShape({ position, color, shape = 'box', scale = 1 }: {
  position: [number, number, number];
  color: string;
  shape?: 'box' | 'sphere' | 'torus' | 'octahedron';
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, 16, 16);
      case 'torus':
        return new THREE.TorusGeometry(0.4, 0.2, 8, 16);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.5);
      default:
        return new THREE.BoxGeometry(0.8, 0.8, 0.8);
    }
  }, [shape]);

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        geometry={geometry}
      >
        <meshPhongMaterial
          color={color}
          transparent
          opacity={0.6}
          shininess={100}
        />
      </mesh>
    </Float>
  );
}

// Main 3D scene component
function Scene3D() {
  const shapes = useMemo(() => [
    { position: [-8, 4, -5] as [number, number, number], color: '#22c55e', shape: 'box' as const, scale: 0.8 },
    { position: [8, -3, -8] as [number, number, number], color: '#3b82f6', shape: 'sphere' as const, scale: 1.2 },
    { position: [-6, -4, -6] as [number, number, number], color: '#ec4899', shape: 'torus' as const, scale: 1.0 },
    { position: [7, 5, -4] as [number, number, number], color: '#f97316', shape: 'octahedron' as const, scale: 0.9 },
    { position: [-4, 2, -10] as [number, number, number], color: '#9b87f5', shape: 'box' as const, scale: 1.1 },
    { position: [5, -1, -7] as [number, number, number], color: '#06b6d4', shape: 'sphere' as const, scale: 0.7 },
    { position: [-9, -2, -3] as [number, number, number], color: '#8b5cf6', shape: 'torus' as const, scale: 0.8 },
    { position: [3, 6, -9] as [number, number, number], color: '#10d876', shape: 'octahedron' as const, scale: 1.0 },
  ], []);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lighting */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.5}
        color="#ffffff"
      />
      
      {/* Point lights for dramatic effect */}
      <pointLight position={[-10, -10, -10]} color="#9b87f5" intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#ec4899" intensity={0.3} />

      {/* Floating shapes */}
      {shapes.map((shapeProps, index) => (
        <FloatingShape key={index} {...shapeProps} />
      ))}

      {/* Subtle orbit controls for interactivity */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// 3D Background component
export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}