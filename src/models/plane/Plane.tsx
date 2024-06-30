import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
// @ts-expect-error | Does .glb supports type defenition? Needs R&D.
import planeScene from '../../assets/3d/plane.glb';
import { Mesh } from 'three';

interface PlaneProps {
  isRotating: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // This allows additional arbitrary props
}

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const Plane = ({ isRotating, ...props }: PlaneProps) => {
  const ref = useRef<Mesh>(null);
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {/* use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
