import React, { useRef } from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'


const Navbar = () => {

    const sideMenuRef = useRef<HTMLUListElement>(null)

    const openMenu = ()=>{
        if(sideMenuRef.current){
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }

    const closeMenu = ()=>{
        if(sideMenuRef.current){
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }


  return ( 
  <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='gradient' className='w-full'/>
    </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between z-50 '>
        <a href="#top">
            <Image src={assets.logo} alt='image' className='w-28 mr-14 cursor-pointer '/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex gap-4'>

            <button><Image src={assets.moon_icon} alt='moon' className='w-6'/></button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='contact' className='w-3'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className='w-6'/>
            </button>

        </div>

        {/* nav bar for mobile view  */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            
            <div onClick={closeMenu} className='absolute right-6 top-6'>
                <Image src={assets.close_black} alt='cross' className='cursor-pointer w-5'/>
            </div>
 
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>

    </nav>
  </> 
  )
  
}
export default Navbar
