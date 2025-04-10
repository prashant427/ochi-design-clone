import React, { useState } from 'react'
import {Cards} from './index.js'
function Projects() {
    const projects = [
        {
          left :{
            title:"Salience Labs",
            image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
        },

        right:{
            title:"Cardboard Spaceship",
            image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
        }},
        {
          left:{
            title:"AH2 & Matt Horn",
            image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",

        },
        right:{
            title:"Fyde",
            image: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png",
        }},
        {
        left:{
            title:"Vise",
            image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
        },
        right:{
            title:"All Things Go",
            image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
          }
        },
    ];



  return (
    <div className='w-full h-full  pb-20'>
            <div className='w-full h-full flex items-center  px-8 py-12 border-b border-zinc-600' >
                <h1 className='text-4xl font-sarif  text-center' >Featured projects</h1>
            </div>
        <div>
            {projects.map((project,index) => (
                <div className='w-full  grid grid-cols-2 gap-4 p-4  relative' >
                <div className='relative'>
                  
                <Cards title={project.left.title} description="Description of project 1" image={
                  project.left.image} style="left-full"
                  />
                
                </div>
                
                <div className='relative'>
                  
                <Cards title={project.right.title} description="Description of project 2" image={project.right.image} /> 
                </div>
                </div>
            ))}
        </div>
        <div className='w-full my-10 p-4 flex items-center justify-center' >

            <div className='px-8 py-4 rounded-full flex items-center gap-4 uppercase border border-zinc-300 text-left' >
              <h1>view all case study</h1>
              <div className='w-[10px] h-[10px] bg-zinc-50 rounded-full '></div>
                </div>
        </div>

    </div>

               
    
  )
}

export  {Projects}