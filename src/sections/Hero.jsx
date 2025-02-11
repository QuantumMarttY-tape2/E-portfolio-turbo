import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
// import HearthStone from "../components/Hearthstone";
// import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import Hydrogen from "../components/Hydrogen";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
    // Define the small device's size.
    const isSmall = useMediaQuery({ maxWidth: 440 });

    // Define the mobile device's size.
    const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });

    // Define the tablet's size.
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // Calculate sizes.
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // Special state to toggle on and off 3D models.
    const [modelOn, setModelOn] = useState(false);
    const toggle3D = () => {
        setModelOn((prevModelOn) => !prevModelOn);
    }

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans z-10">
                    Toggle 3D models on and off here:
                    <button className="arrow-btn" onClick={toggle3D}>
                        <img
                            src="/assets/power-button.png"
                            alt="github"
                            className="w-4 h-4"
                        />
                    </button>.
                </p>

                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Welcome to the TURBO version of my e-portfolio <span className="waving-hand">✋</span>.
                </p>

                <p className="hero_tag text-gray_gradient">
                    Physicist, Mathematician, Data Analyst, Frontend Developer
                </p>
            </div>

            {/* 3D Showcase. Default if off, can be toggled on and off. */}
            {modelOn &&
                (<div className="w-full h-full absolute inset-0">
                    {/* This enables interactions with the 3D model. */}
                    {/* <Leva /> */}

                    {/* Everything inside the "Canvas" is inside a 3D enviornment. */}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            {/* Default Camera Angle. */}
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            {/* 3D Object Showcase. */}
                            <HeroCamera isMobile={isMobile}>
                                {/* <HackerRoom
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0.4, 3.2, 0]}
                                /> */}
                                <Hydrogen
                                    scale={sizes.deskScale*5}
                                    position={sizes.deskPosition}
                                    rotation={[0.4, 0, 0]}
                                />
                            </HeroCamera>
                            
                            {/* Accessory Models. */}
                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>

                            {/* Let there be light. */}
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>)
            }

            {/* Button that takes to the contact section. */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let us work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;