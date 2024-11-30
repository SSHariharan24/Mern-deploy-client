import React from 'react'
import HeroImage from '../assets/hero-images.jpg'
export const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16' id="Hero">
        <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover 
        transition-transform duration-300 hover:scale-125' />
        <h1 className='text-4xl font-bold'>
          I'm {""}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Hariharan</span>
          , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg,text-gray-300 '>I specialize in building modern and responsive web application</p>
        <div className='mt-8 space-x-4'>
          <a href='sshariharan24@gmail.com' className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact With Me
            </a>
          <a href='./Resume1.pdf' download className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
          transform transition-transform duration-300  px-4 py-2 rounded-full hover:scale-105 '>
            Resume
          </a>
        </div>
    </div>
  )
}
