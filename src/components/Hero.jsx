import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Hero() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.22" className="w-full bg-zinc-900 p-4">

      <div className='textbox mt-40  text-white '> 
      {["WE CREATE ","eye-opening ","presentations "].map((item,index)=> (
        <div className='masker font-[Founders Grotesk] px-9 capitalize'>
        <div className='w-fit flex items-center '> 
        {index === 1 && (
          <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.25, 1, 0.5, 1],duration:1}}  className='w-[9vw] h-[5vw] relative -top-2 mr-1vw bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center'></motion.div>)}
        <h1 className='text-[7.5vw] uppercase leading-20 tracking-tigher font-bold '> {item} </h1>
        </div>
      </div>)
      )}

        
        

      </div>

      <div className='border-t  border-zinc-500 mt-32 flex justify-between font-extralight items-center w-full px-12 py-2 text-sm' >
        {[ "For public and private companies",
           "From the first pitch to IPO",
        
        ].map((item,index)=> <h1>{item}</h1> ) }

        <div className='flex items-center gap-1 '>
          <div className='px-4 py-2 border border-zinc-500 text-sm rounded-full capitalize'>start the project</div>
          <div className='w-8 h-8 border-zinc-500 border rounded-full flex items-center justify-center ' > <MdArrowOutward /> </div>

        </div>

      </div>


    </div>
  )
}

export { Hero }