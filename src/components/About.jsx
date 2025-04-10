import React from 'react'

export const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0
    " className='w-full py-10 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl  '>
        <h1 className='font-[Founders Grotesk] text-[2vw] px-8 font-light  '>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full border-t mt-12 p-3 px-10 border-[#8d9f47] flex gap-5' >
                
                <div className='w-1/2  '>
                    <h1 className='text-[3vw]' >Our approach:</h1>
                    <button className='px-4 py-3 mt-4 rounded-full text-white bg-zinc-900 uppercase flex gap-2 justify-center items-center'>
                         read more
                         <div className='w-2 h-2 bg-zinc-50 rounded-full' ></div>
                    </button>
                </div>
                <div className='w-1/2 h-[60vh] rounded-2xl bg-[#8d9f47] p-10 '>

                </div>
                
        </div>

    </div>
  ) 
}
