import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { Mesh } from "three";
// @ts-expect-error | Does .glb supports type defenition? Needs R&D.
import spacemanScene from '../../assets/3d/spaceman.glb';

const SpaceMan = () => {
    const spacemanRef = useRef<Mesh>(null);
    const { scene, animations } = useGLTF(spacemanScene);
    const { actions } = useAnimations(animations, spacemanRef);

    useEffect(() => {
        actions["Idle"]?.play();
    }, [actions]);

    return (
        <mesh ref={spacemanRef} rotation={[2, .5, -1]} scale={2}>
            <primitive object={scene} />
        </mesh>
    )
}

export default SpaceMan