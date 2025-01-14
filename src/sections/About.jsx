import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
    // State to determine whether the object in interest is copied.
    const [hasCopied, setHasCopied] = useState(false);

    // Copy Function.
    const handleCopy = () => {
        navigator.clipboard.writeText("fukunyunqmty@gmail.com");

        // Set email has copied.
        setHasCopied(true);

        // Reset after 2000ms.
        setTimeout(() => setHasCopied(false), 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:gridrows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    {/* First Block. */}
                    <div className="grid-container">
                        {/* Picture. */}
                        <img
                            // src="/public/textures/desk/cthun-1920x1080.jpg"
                            src="/assets/cthun-1920x1080.jpg"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />

                        {/* Paragraph. */}
                        <div className="">
                            <p className="grid-headtext">Hi, I am FuKun Yun</p>
                            <p className="grid-subtext">Frontend Developer and Data Scientist with
                                4 years of experience in frontend development,
                                experimental data analysis, and machine learning.
                                Expertise in React.js, python, and data visualization.</p>
                        </div>
                    </div>
                </div>

                {/* Second Block. */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Picture. */}
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />

                        {/* Paragraph. */}
                        <div className="">
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Physicist | Mathematician | Data Analyst | Frontend Developer</p>
                        </div>
                    </div>
                </div>

                {/* Third Block. */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        {/* Globe. */}
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        {/* Paragraph. */}
                        <div className="">
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I am based in US, with remote work avaliable.</p>
                            <a href="#contact" className="w-fit">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Fourth Block. */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        {/* Picture. */}
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />

                        {/* Paragraph. */}
                        <div className="">
                            <p className="grid-headtext">Something Else About Me</p>
                            <p className="grid-subtext">
                                Resume download:
                                <a href="/assets/FuKun Yun Resume.pdf" target="_blank" className="">
                                    <button className="arrow-btn">
                                        <img
                                            src="/assets/pdf.png"
                                            alt="github"
                                            className="w-4 h-4"
                                        />
                                    </button>
                                </a>
                            </p>
                            <p className="grid-subtext">Phone number: +1 949-806-9141</p>
                        </div>
                    </div>
                </div>

                {/* Fifth Block. */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        {/* Picture. */}
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full sm:h-[126px] md:h-[276px] h-fit object-cover sm:object-top"
                        />

                        {/* Contact. */}
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">fukunyunqmty@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;