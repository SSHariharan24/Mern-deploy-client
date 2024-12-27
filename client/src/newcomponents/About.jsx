import React from 'react'
import AboutImage from '../assets/hari.jpg'
import { motion } from "framer-motion";

import {fadeIn} from './variants.js'
export const About = () => {
  return (
    <div className='dark:bg-black text-white  dark:text-white text-center py-24' id="About">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <motion.h2  variants={fadeIn("left",0.5)}
                initial={{opacity:0}}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                 className='text-4xl text-black dark:text-white font-bold text-center mb-12'>About Me</motion.h2>
            <motion.div 
             variants={fadeIn("up",0.5)}
             initial={{opacity:1}}
             whileInView={"show"}
            //  whileHover="hover"
             viewport={{once:false,amount:0.7}}
            className='flex flex-col md:flex-row items-center md:space-x-12'>
                <motion.img
                variants={fadeIn("up",0.5)}
                initial={{opacity:0}}
                whileInView={"show"}
                whileHover="hover"
                viewport={{once:false,amount:0.7}}
                src={AboutImage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
               <div className='flex-1'>
                 <p className='text-lg text-black dark:text-white mb-8'>
                I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
                </p>

                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12 text-black dark:text-white'>HTML CSS & JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>

                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="reactjs" className='w-2/12 text-black dark:text-white'>REACT JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-11/12'>

                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="nodeandexpressjs" className='w-2/12 text-black dark:text-white'>NODE & EXPRESS JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-9/12'>

                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="Mongodb" className='w-2/12 text-black dark:text-white'>MONGO DB</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>

                            </div>
                        </div>
                    </div>

                </div>

            <motion.div 
             variants={fadeIn("left",0.5)}
             initial="hidden"
             whileInView={"show"}
            //  whileHover="hover"
             viewport={{once:false,amount:0.7}}
            className='mt-12 flex justify-around text-center'>
                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                    3+
                    </h3>
                    <p className='text-black dark:text-white'>Months Intern Experience</p>
                </div>

                <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                    10+
                    </h3>
                    <p className='text-black dark:text-white'>Project Completed</p>
                </div>

                
                {/* <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                    5+
                    </h3>
                    <p>Happy clients</p>
                </div> */}
                
            </motion.div>

</div>
    </motion.div>
        </div>
            </div>
  )
}
