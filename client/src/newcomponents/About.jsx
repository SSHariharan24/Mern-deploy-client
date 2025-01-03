import React from 'react';
import AboutImage from '../assets/hari.jpg';
import { motion } from "framer-motion";
import { fadeIn } from './variants.js';

export const About = () => {
  return (
    <div className='dark:bg-black dark:text-white text-center py-24' id="About">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        
        {/* Title with animation */}
        <motion.h2 
          variants={fadeIn("left", 0.5)}
          initial={{ opacity: 0 }}
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='text-4xl font-bold text-center mb-12'
        >
          About Me
        </motion.h2>

        {/* Flex container for image and content */}
        <motion.div 
          variants={fadeIn("up", 0.5)}
          initial={{ opacity: 1 }}
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-col md:flex-row items-center md:space-x-12'
        >
          {/* About image */}
          <motion.img
            variants={fadeIn("up", 0.5)}
            initial={{ opacity: 0 }}
            whileInView="show"
            whileHover="hover"
            viewport={{ once: false, amount: 0.7 }}
            src={AboutImage} 
            alt="Hariharan's Portrait"
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          
          {/* Content Section */}
          <div className='flex-1'>
            <p className='text-lg mb-8'>
              I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
            </p>

            {/* Skill Bars */}
            <div className='space-y-4'>
              {/* HTML, CSS, JS */}
              <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-2/12'>HTML CSS & JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>

              {/* React JS */}
              <div className='flex items-center'>
                <label htmlFor="reactjs" className='w-2/12'>REACT JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                </div>
              </div>

              {/* Node & Express JS */}
              <div className='flex items-center'>
                <label htmlFor="nodeandexpressjs" className='w-2/12'>NODE & EXPRESS JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>

              {/* Mongo DB */}
              <div className='flex items-center'>
                <label htmlFor="Mongodb" className='w-2/12'>MONGO DB</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>
            </div>

            {/* Stats section */}
            <motion.div 
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='mt-12 flex justify-around text-center'
            >
              {/* Intern Experience */}
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  3+
                </h3>
                <p>Months Intern Experience</p>
              </div>

              {/* Projects Completed */}
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>

              {/* Optionally, add more stats like happy clients */}
              {/* <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  5+
                </h3>
                <p>Happy Clients</p>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
