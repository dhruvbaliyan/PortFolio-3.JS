import React,{useState, Suspense} from 'react'
import { myProjects } from '../constants/index.js'
import { Canvas } from '@react-three/fiber';
import {Center, OrbitControls} from '@react-three/drei';
import CanvasLoader from '../component/CanvasLoader';
import DemoComputer from '../component/DemoComputer.jsx';


// const projectCount =  myProjects.length;
const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState(0);
    const currentProject = myProjects[selectedProject];

    const handleNavigation = (direction) => {
        setSelectedProject((prev)=>{
            if(direction === 'previous'){
                return prev === 0 ? myProjects.length - 1 : prev - 1;
            }else{
                return prev === myProjects.length - 1 ? 0 : prev + 1;
            }
        });
    }
  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Work</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-10 shadow-2xl shadow-black-200">
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 rounded-xl object-cover'/>
                </div>
                
                <div className="p-1 backdrop-filter backdrop-blur-3xl rounded-lg w-fit" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className='size-20 object-contain shadow-sm'/>
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2xl font-semibold animatedText">
                        {currentProject.title}
                    </p>
                    <p className="animatedText">
                        {currentProject.desc}
                    </p>
                    <p className="animatedText">
                        {currentProject.subdesc}
                    </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag,index)=>(
                            <div key={index} className='tech-logo'>
                                <img src={tag.path} alt={tag.name} className='size-5 object-contain'/>
                            </div>
                        ))}
                    </div>
                    <a href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-gray_gradient'>
                        <p>Check Live Site</p>
                        <img src="/assets/arrow-up.png" alt="arrow" className='size-4'/>
                    </a>
                </div>

                <div className="flex justify-between mt-7 items-center">
                    <button className='arrow-btn' onClick={()=>handleNavigation('previous')}>
                        <img src={"/assets/left-arrow.png"} alt="arrow" className='size-5 object-contain'/>
                    </button>

                    <button className='arrow-btn' onClick={()=>handleNavigation()}>
                        <img src={"/assets/right-arrow.png"} alt="arrow" className='size-5 object-contain'/>
                    </button>
                </div>
            </div>

            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={Math.PI}/>
                    <directionalLight position={[10,10,5]}/>
                    <Center>
                        <Suspense fallback = {<CanvasLoader/>}>
                            <group scale={2} 
                            position={[0,-3,0]} 
                            rotation={[0,-0.1,0]}>
                                    <DemoComputer />
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls  
                        maxPolarAngle = {Math.PI/2} 
                        enableZoom = {false} />
                </Canvas>

            </div>
        </div>
    </section>
  )
}

export default Projects