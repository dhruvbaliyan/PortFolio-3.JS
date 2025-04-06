import React,{useState} from 'react'
import Globe from 'react-globe.gl';
import Button from '../component/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' dhruv2213073@akgec.ac.in');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className='c-space my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {/* First Card */}
                <div className='xl:col-span-1'>
                    <div className='grid-container'>
                        <img src={"/assets/grid1.png"} alt="grid1" className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>Hi , I'm <span className='text-white'>Dhruv</span></p>
                            <p className='grid-subtext'>Crafting immersive digital experiences, one pixel at a time</p>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className='xl:col-span-1'>
                    <div className='grid-container'>
                        <img src={"/assets/grid2.png"} alt="grid2" className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>Tech Stack <span className='text-white'>I Specalize in</span></p>
                            <p className='grid-subtext'>JavaScript/TypeScript with Focus on React & Next.js Ecosystem</p>
                        </div>
                    </div>
                </div>

                {/* Globe Card */}
                <div className='xl:col-span-1 md:col-span-2'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex items-center justify-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Passion Card */}
                <div className='xl:col-span-2'>
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Card */}
                <div className='xl:col-span-1'>
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">dhruv2213073@akgec.ac.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About