import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'
const Work = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2}} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:0.2}} className='text-center mb-2 font-Ovo'>My portfolio</motion.h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:0.2}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
      </motion.p>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:0.2}} className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
        {/* background image error bug here */}
        {workData.map(({title,bgImage,description,link},index)=>(
          <motion.div whileHover={{scale:1.05}} key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url('${bgImage}')`}}>
            <div className='bg-[#fcf4ff] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <a href={link}>
                <div>
                <h2 className='font-semibold '>{title}</h2>
               <p className='text-sm text-green-700 '>{description}</p>
              </div></a>  
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send-icon' className='w-5'/>
              </div>
             </div>
            </motion.div>
        ))}
      </motion.div>
          <motion.a initial={{opacity:0}} whileHover={{scale:1.05}} whileInView={{opacity:1}}  href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto hover:bg-[#fcf4ff] duration-500'>Show more <Image src={assets.right_arrow_bold} alt='arrow' className='w-4' /></motion.a>
    </motion.div> 
  )
}

export default Work
