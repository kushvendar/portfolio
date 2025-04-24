import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
      </p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
        {workData.map(({title,description,bgImage},index)=>(
          <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${bgImage})`}}>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              </div>  
              <Image src={assets.send_icon} alt='send-icon' className='w-5'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Work
