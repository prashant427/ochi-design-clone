import { motion } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'

function Cards(props) {

  const [hover, setHover] = useState(false);

  const handleHover = (e) => {
    setHover(true);
    
  }
  const handleLeave = () => {
    setHover(false);
  }

  return (

    <div className='w-full p-4 ' >
      <h1 className={`absolute flex font-sans text-[#CDEA68] z-[8] text-6xl text-nowrap tracking-tighter  top-1/2 -translate-1/2 overflow-hidden ${props.style} `} >{props.title.split("").map((leter,index)=> (
        <motion.span 
            className='inline-block' 
            initial={{y:"100%"}} 
            animate={hover ? {y:"0"} : {y:"100%"} }
            transition={{ease: [0.33, 1, 0.68, 1] , duration: 0.1, delay: index * 0.06}}  
            >
              {leter}
        </motion.span>))}
      </h1>
        <div className='flex gap-2 p-2' > 
          <div className='w-6 h-6 bg-white text-[10px] rounded-full'></div> <h1>{props.title}</h1></div>

        <div id='hoverEffect' onMouseEnter={handleHover} onMouseLeave={handleLeave} className='relative w-full h-[75vh]  hover:scale-95 ease-in-out duration-400 ' >
            
            <img src={props?.image} title={props.title} className='rounded-xl' alt="ochi image" />
        </div>
    </div>
  )
}

export  {Cards}