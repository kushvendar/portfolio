import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import '../globals.css' 
import {motion} from 'motion/react'

const About = () => {
  return (
    <motion.div initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:0.2}}   id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 initial={{y:-20, opacity:0 }} whileInView={{y:0, opacity:1}} transition={{duration:0.2, delay:0.2}} className='text-center mb-2 font-Ovo'>Introduction</motion.h4>
      <motion.h2 initial={{y:-20,opacity:0 }} whileInView={{y:0, opacity:1}} transition={{duration:0.2, delay:0.2}} className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:0.2}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <motion.div initial={{scale:0.9, opacity:0 }} whileInView={{scale:1, opacity:1}} transition={{duration:0.2, delay:0.2}} className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.profile_img} alt='' className='w-full rounded-3xl'/>
          </motion.div>
          <motion.div initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:0.2, delay:0.2}} className='flex-1'>
            <p className='a'>I am a experienced Front end developer with over a year of professional expertise in the field. Throughout my carrer, I had the privilege of collabrating with prestigious organisations, contributing to their suceess and growth.</p>

            <motion.ul initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:0.2, delay:0.2}} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
              {infoList.map(({icon, title, description},index)=>(
                <motion.li whileHover={{scale:1.05}} key={index} className='border-[0.5px] border-gray-500 rounded-xl cursor-pointer p-6 mt-5 hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-lg'>
                  <Image src={icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-500 text-sm '>{description}</p>
                  
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4 initial={{y:20,opacity:0 }} whileInView={{y:0, opacity:1}} transition={{duration:0.3, delay:0.2}} className='my-6 text-gray-700 font-Ovo'>Tools I use</motion.h4>

            <motion.ul initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:0.2, delay:0.2}} className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <motion.li whileHover={{scale:1.1}} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' key={index}><Image className='w-5 sm:w-7' src={tool} alt='tags'/></motion.li>
              ))}
            </motion.ul>

          </motion.div>
      </motion.div>
      
    </motion.div>
  )
}

export default About
