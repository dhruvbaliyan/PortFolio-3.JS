import React from 'react'
import Navbar from './section/Navbar.jsx'
import Hero from './section/Hero.jsx'
import About from './section/About.jsx'
import Projects from './section/Projects.jsx'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto bg-black'>
        <Navbar/>
        <Hero/>
        <About /> 
        <Projects />
    </main>

  )
}

export default App