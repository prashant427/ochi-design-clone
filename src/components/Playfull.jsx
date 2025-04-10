import React, { useEffect, useState } from 'react'

export const Playfull = ()=> {
    const [rotare, setrotare] = useState(0)
    useEffect(() => {
        const handleMouseMove = (e) => {
            let mousex = e.clientX;
            let mousey = e.clientY;
            
            let deltaX = mousex - window.innerWidth / 2;
            let deltaY = mousey - window.innerHeight / 2;
    
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            setrotare(angle-180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='w-full h-screen p-2 overflow-hidden' >
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-no-repeat bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]' >
        <div id='eyes' className='absolute top-1/2 left-1/2 -translate-1/2 flex gap-12 justify-between items-center  p-2' >

            <div id='eye-riz' className='w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full ' >

                <div id='eye-ball' className='relative w-2/3 h-2/3 bg-black rounded-full ' >

                        <div id='rotate-line' style={{transform: `translate(-50%, -50%) rotate(${rotare}deg)`, }} className='absolute w-full top-1/2  left-1/2  '>
                            <div id='pupill' className='w-10 h-10 bg-white  rounded-full ' >
                            
                            </div>
                        </div>

                </div>
                    
            </div>

            <div id='eye-riz' className='w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full ' >
                
            <div id='eye-ball' className='relative w-2/3 h-2/3 bg-black rounded-full ' >

                        <div id='rotate-line' style={{transform: `translate(-50%, -50%) rotate(${rotare}deg)`, }} className='absolute w-full top-1/2  left-1/2  '>
                            <div id='pupill' className='w-10 h-10 bg-white  rounded-full ' >
                            
                            </div>
                        </div>

                </div>
            </div>

        </div>

        </div>
    </div>
  )
}
