import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const FloatingSphere = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.5, 32, 32]}
    >
      <meshStandardMaterial
        color="#d946ef"
        metalness={0.2}
        roughness={0.3}
        transparent
        opacity={0.7}
      />
    </Sphere>
  );
};

export default FloatingSphere;