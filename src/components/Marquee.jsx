import { motion } from 'framer-motion'
import React from 'react'

export const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-speed=".01" className='w-full py-16  bg-[#216d63] text-white ' >
      <div className='text border-t border-b border-zinc-400 flex gap-10 overflow-hidden whitespace-nowrap '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className='text-[16vw] font-[Founders Grotesk]  uppercase font-semibold leading-none' >we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className='text-[16vw] font-[Founders Grotesk] uppercase font-semibold leading-none' >we are ochi</motion.h1>
      </div>
    </div>
  )
}
