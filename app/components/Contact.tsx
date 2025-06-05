import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState } from 'react';
import {motion} from 'motion/react'

function Contact() {

  const [result, setResult] = useState("");

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "f5c815a5-1658-49d3-8144-8de7d4022a6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2}} id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <motion.h4 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:0.2}} className='text-center text-lg mb-2 font-Ovo'>Connect with me</motion.h4 >
      <motion.h2 initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:0.2}} className='text-center text-5xl font-Ovo'>Get In touch</motion.h2>

      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:0.2}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I&apos;d love to hear from you! if you have any questions, comment, feedback please use the form below.
      </motion.p>

      <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:0.2}} onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8 '>

        <motion.input initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{delay:0.2, duration:0.2}} type="text"  placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
        <motion.input initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{delay:0.2, duration:0.2}} type="email" placeholder='Enter your email' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />

        </div>
        <motion.textarea initial={{y:-50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:0.2}} name="" rows={6} id="" placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></motion.textarea>

        <motion.button whileHover={{scale:1.05}} transition={{duration:0.2}} type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white} className='w-4' alt='right arrow'/></motion.button>

        <p className='mt-4 '>{result}</p>
      </motion.form>

    </motion.div>
  )
}

export default Contact
