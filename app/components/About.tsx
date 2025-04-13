import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <h4 className='text-center mb-2 font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flext w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
          </div>
          <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I am a experienced Full-stack developer with over a decaded of professional expertise in the field. Throughout my carrer, I had the privilege of collabrating with prestigious organisations, contributing to their suceess and growth.</p>
          </div>
      </div>
      
    </div>
  )
}

export default About
