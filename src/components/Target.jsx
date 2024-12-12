import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

// Module to animate 3D models.
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    // Start a scene.
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    
    // With a rough.
    const targetRef = useRef();

    useGSAP(() => {
        // Animate to a specific location.
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    });

    return (
       <mesh { ...props } ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5} >
           <primitive object={scene} />
       </mesh>
    );
};

export default Target;