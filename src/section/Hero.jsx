import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import HackerRoom from '../component/HackeRoom.jsx'
import CanvasLoader from '../component/CanvasLoader.jsx'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../component/Target.jsx'
import ReactLogo from '../component/ReactLogo.jsx'
import Cube from '../component/Cube.jsx'
import Rings from '../component/Rings.jsx'
import HeroCamera from '../component/HeroCamera.jsx'
import Button from '../component/Button.jsx'


const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };    



const Hero = () => {
    // const modelControls = useControls('Model', {
    //     positionX:{
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: 0.1
    //     },positionY:{
    //         value: 0,
    //         min: -35,
    //         max: 5,
    //         step: 0.1
    //     },positionZ:{
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: 0.1
    //     },rotationX:{
    //         value: 0,
    //         min: -Math.PI,
    //         max: Math.PI,
    //         step: 0.1
    //     },rotationY:{
    //         value: -Math.PI / 2,
    //         min: -Math.PI,
    //         max: Math.PI,
    //         step: 0.1
    //     },rotationZ:{
    //         value: 0,
    //         min: -Math.PI,
    //         max: Math.PI,
    //         step: 0.1
    //     },scale:{
    //         value: 0.01,
    //         min: 0.001,
    //         max: 0.3,
    //         step: 0.001
    //     }       
    // })

    // const lightControls = useControls('Lighting', {
    //     ambientIntensity: {
    //         value: 0.5,
    //         min: 0,
    //         max: 2,
    //         step: 0.1
    //     },
    //     directionalIntensity: {
    //         value: 1,
    //         min: 0,
    //         max: 2,
    //         step: 0.1
    //     },
    //     directionalX: {
    //         value: 5,
    //         min: -10,
    //         max: 10,
    //         step: 0.5
    //     },
    //     directionalY: {
    //         value: 5,
    //         min: -10,
    //         max: 10,
    //         step: 0.5
    //     },
    //     directionalZ: {
    //         value: 5,
    //         min: -10,
    //         max: 10,
    //         step: 0.5
    //     }
    // })

    // const cameraControls = useControls('Camera', {
    //     positionZ: {
    //         value: 50,
    //         min: 10,
    //         max: 100,
    //         step: 1
    //     }
    // })

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({maxWidth: 440});

    const sizes = calculateSizes(isSmall, isMobile, isTablet );
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-10 '>
            {/* bytesized-regular class of fonts */}
             <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Dhruv <span className='waving-hand text-4xl'>👋</span></p>
             <p className='hero_tag text-gray_gradient'>MERN Stack <span className='text-white'> Developer</span></p>
        </div>

        {/* 1. 3d model */}
        <div className='w-full h-full absolute inset-1'>
            <Leva />
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <OrbitControls enableZoom={false} />
                    
                    <HeroCamera>
                    <HackerRoom 
                        // position={[modelControls.positionX, modelControls.positionY, modelControls.positionZ]} 
                        // rotation={[modelControls.rotationX, modelControls.rotationY, modelControls.rotationZ]} 
                        // scale={[modelControls.scale, modelControls.scale, modelControls.scale]}
                        position = {sizes.deskPosition}
                        rotation = {[0, -Math.PI, 0]}
                        scale = {sizes.deskScale}
                    />
                    </HeroCamera>


                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight 
                        position={[10,10,10]} 
                        intensity={0.5} 
                    />
                </Suspense>
            </Canvas>
        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#contact" className='w-fit'>
                <Button name="Let's Talk" isBeam containerClass="sm:w-fit w-full" />
            </a>
        </div>
    </section>
  )
}

export default Hero