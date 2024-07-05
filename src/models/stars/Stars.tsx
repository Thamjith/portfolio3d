import { BufferAttribute, Points } from 'three';
import { useEffect, useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber';

const Stars = () => {
    const starMesh = useRef<Points>(null);
    const starCount = 500; // Number of stars
    const [positions, setPositions] = useState(new Float32Array(starCount * 3));

    // Generate star positions
    useEffect(() => {
        const positionsArray = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            positionsArray[i * 3] = (Math.random() - 0.5) * 200; // x
            positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
            positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 200; // z
        }
        setPositions(positionsArray);
    }, []);

    // Update star positions based on mouse movement
    useFrame(({ mouse }) => {
        if (!starMesh.current) return;

        // Convert mouse coordinates from [-1, 1] range to a smaller range for subtle movement
        const moveFactor = 0.02;
        const mouseX = mouse.x * moveFactor;
        const mouseY = mouse.y * moveFactor;

        // Update the position of each star
        const updatedPositions = positions.map((value, index) => {
            if (index % 3 === 0) return value + mouseX; // x
            if (index % 3 === 1) return value + mouseY; // y
            return value; // z remains the same
        });

        const geometry = starMesh.current.geometry;
        geometry.setAttribute('position', new BufferAttribute(updatedPositions, 3));
        starMesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={starMesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={positions.length / 3} />
            </bufferGeometry>
            <pointsMaterial color="white" size={0.5} sizeAttenuation />
        </points>
    );
};

export default Stars;
