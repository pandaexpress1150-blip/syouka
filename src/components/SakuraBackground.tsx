import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PETAL_COUNT = 150;

const SakuraPetals = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random initial data for each petal
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 20 - 10;
      
      const speed = 0.02 + Math.random() * 0.03;
      const flutterSpeed = 0.01 + Math.random() * 0.02;
      const flutterAmp = 0.05 + Math.random() * 0.1;
      
      const rotX = Math.random() * Math.PI;
      const rotY = Math.random() * Math.PI;
      const rotZ = Math.random() * Math.PI;
      
      const rotSpeedX = (Math.random() - 0.5) * 0.05;
      const rotSpeedY = (Math.random() - 0.5) * 0.05;
      const rotSpeedZ = (Math.random() - 0.5) * 0.05;

      const scale = 0.1 + Math.random() * 0.15;

      temp.push({
        x, y, z,
        speed,
        flutterSpeed, flutterAmp,
        rotX, rotY, rotZ,
        rotSpeedX, rotSpeedY, rotSpeedZ,
        scale,
        seed: Math.random() * 100
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      // Update position
      particle.y -= particle.speed;
      particle.x += Math.sin(time * particle.flutterSpeed + particle.seed) * particle.flutterAmp;
      
      // Reset if it falls too low
      if (particle.y < -20) {
        particle.y = 20;
        particle.x = (Math.random() - 0.5) * 40;
      }

      // Update rotation
      particle.rotX += particle.rotSpeedX;
      particle.rotY += particle.rotSpeedY;
      particle.rotZ += particle.rotSpeedZ;

      // Apply to dummy object
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.rotation.set(particle.rotX, particle.rotY, particle.rotZ);
      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Create a realistic sakura petal shape
  const petalShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.5, 0.5, 1.5, 0.2, 2.0);
    shape.bezierCurveTo(0.1, 1.8, -0.1, 1.8, -0.2, 2.0);
    shape.bezierCurveTo(-0.5, 1.5, -0.5, 0.5, 0, 0);
    return shape;
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PETAL_COUNT]}>
      <shapeGeometry args={[petalShape]} />
      <meshStandardMaterial 
        color="#ffb7c5" 
        roughness={0.4}
        transparent={true} 
        opacity={0.8} 
        side={THREE.DoubleSide} 
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export const SakuraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffb7c5" />
        <SakuraPetals />
      </Canvas>
    </div>
  );
};
