import React, { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
    // useState for indices.
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    // Get the total number of the projects.
    const projectCount = myProjects.length;

    // Create object "current projeect".
    const currentProject = myProjects[selectedProjectIndex];

    // Arrows that go left and right by changing the index from above.
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            // Going left.
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
            // Going right.
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20">
            <p className="head-text">My Projects</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    {/* Spotlight. */}
                    <div className="absolute top-0 tight-0">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    {/* Project logo. */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img
                            src={currentProject.logo}
                            alt="logo"
                            className="w-10 h-10 shadow-sm"
                        />
                    </div>

                    {/* Description of the project */}
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold aanimatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    {/* Tools section. */}
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        {/* Languages. */}
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img
                                        src={tag.path}
                                        alt={tag.name}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* GitHub Link. */}
                        <a className="arrow-btn" href={currentProject.github} target="_blank">
                            <img
                                src="/assets/github.svg"
                                alt="github"
                                className="w-4 h-4"
                            />
                        </a>

                        {/* Link. */}
                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>Check Live Site</p>
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow"
                                className="w-3 h-3"
                            />
                        </a>
                    </div>

                    {/* Arrows that go left and right. */}
                    <div className="flex justify-between items-center mt-7">
                        {/* Left arrow. */}
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img
                                src="/assets/left-arrow.png"
                                alt="left arrow"
                                className="w-4 h-4"
                            />
                        </button>

                        {/* Right arrow. */}
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img
                                src="/assets/right-arrow.png"
                                alt="right arrow"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>
                </div>

                {/* Animated computer. */}
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        {/* Center the 3D model. */}
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>

                        {/* Animate the 3D model. */}
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects;