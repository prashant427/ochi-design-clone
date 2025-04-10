import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,Hero,Marquee,About,Playfull,Projects} from "./components/index.js";
import LocomotiveScroll from 'locomotive-scroll';




function App() {
const locomotiveScroll = new LocomotiveScroll();
 

  return (
    <>
      <div className='w-full bg-zinc-900 text-white'id='main' >
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Playfull />
        <Projects />
        {/* <CardGrid /> */}
      </div>
    </>
  )
}

export default App
