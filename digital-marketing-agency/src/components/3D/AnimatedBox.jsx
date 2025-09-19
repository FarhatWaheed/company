import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const AnimatedBox = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, 1, 1]}
    >
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.3}
        roughness={0.4}
        transparent
        opacity={0.8}
      />
    </Box>
  );
};

export default AnimatedBox;