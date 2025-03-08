"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Circle = ({
  radius,
  speed,
  orbitRadius,
  segments,
}: {
  radius: number;
  speed: number;
  orbitRadius: number;
  segments: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Create a circle with random lines
  const createSegmentedCircle = (radius: number, segments: number) => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    const angleStep = (Math.PI * 2) / segments;

    // Create an array of 0's and 1's that represent whether or not to show lines
    const randomSegments = Array.from({ length: segments }, () =>
      Math.random() > 0.5 ? 1 : 0
    );

    for (let i = 0; i < segments; i++) {
      // If the random value is 1, add the line
      if (randomSegments[i] === 1) {
        const angle1 = i * angleStep;
        const angle2 = (i + 1) * angleStep;

        const x1 = radius * Math.cos(angle1);
        const y1 = radius * Math.sin(angle1);
        const x2 = radius * Math.cos(angle2);
        const y2 = radius * Math.sin(angle2);

        positions.push(x1, y1, 0);
        positions.push(x2, y2, 0);
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  };

  const lineMaterial = new THREE.LineBasicMaterial({
    color: "#144ee3",
    opacity: 0.5,
    transparent: true,
  });

  const geometry = createSegmentedCircle(radius, segments);

  const direction = Math.random() > 0.5 ? 1 : -1;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * speed;
      groupRef.current.position.x = Math.cos(t) * orbitRadius;
      groupRef.current.position.y = Math.sin(t) * orbitRadius;
      groupRef.current.rotation.z += direction * 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={geometry} material={lineMaterial} />
    </group>
  );
};

const RotatingCircles = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {[...Array(10)].map((_, i) => (
        <Circle
          key={i}
          radius={0.5 + i * 2}
          speed={0.01}
          orbitRadius={0.1 + i * 0}
          segments={80}
        />
      ))}
    </Canvas>
  );
};

export default RotatingCircles;
