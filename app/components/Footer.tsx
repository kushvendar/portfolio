import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='footer' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto '>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            jangidkush1234@gmail.com
        </div>
      </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Kushvendar Jangid. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
                <li><a href="https://github.com/kushvendar">Github</a></li>
                <li><a href="https://x.com/kushvendar_99">X</a></li>
                <li><a href="https://www.linkedin.com/in/kushvendar-jangid-6b46ba184/">Linkedin</a></li>
            </ul>
        </div>


    </div>
  )
}

export default Footer
