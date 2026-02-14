"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function AbstractCore() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Icosahedron args={[1, 1]} ref={meshRef} scale={2}>
                <MeshDistortMaterial
                    color="#00f3ff"
                    attach="material"
                    distort={0.4} // Strength, 0 disables the effect (default=1)
                    speed={2} // Speed (default=1)
                    roughness={0}
                    metalness={0.8}
                    wireframe={true}
                />
            </Icosahedron>

            {/* Inner Core */}
            <Icosahedron args={[0.5, 2]} scale={1.5}>
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#00f3ff"
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={1}
                    wireframe={false}
                />
            </Icosahedron>
        </Float>
    );
}
