import { useRef } from 'react';
// @ts-expect-error | Does .glb supports type defenition? Needs R&D.
import skyScene from '../../assets/3d/sky.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface SkyProps {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (!skyRef.current) return;
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
