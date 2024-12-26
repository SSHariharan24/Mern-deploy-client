import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { motion } from "framer-motion";
import {fadeIn} from './variants.js'
// const backend = process.env.REACT_APP_BACKEND_URL
export const Contacts = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Using Axios to post form data to the server
      const response = await axios.post('https://deploy-server-jbgu.onrender.com/api/sendEmail', formData);

      if (response.status === 200) {
        setStatusMessage('Message sent successfully!');
        // Reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
      } else {
        setStatusMessage('Failed to send the message.');
        
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-black text-white dark:bg-gray-800 dark:text-white  py-20" id="Contacts">
      <motion.div
      variants={fadeIn("right",0.2)}
      initial={{opacity:0}}
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
      className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="text-4xl font-bold text-center mb-12">Contact Me</motion.h2>
        <motion.div 
         variants={fadeIn("right",0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        // whileHover="hover"
                        viewport={{once:false,amount:0.7}}
        className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:sshariharan24@gmail.com" className='hover:underline'>
                    sshariharan24@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+918870038771</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Temcy colony 1st cross street vilangudi, Madurai, India</span>
            </div>
          </motion.div>
          <div className='flex-1 w-full'>
            <motion.form
            variants={fadeIn("right",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    // whileHover="newhover1"
                    whileTap="tap"
                  exit="exit"
                    viewport={{once:false,amount:0.7}}
            className='space-y-4' onSubmit={handleSubmit}>
                {statusMessage && <p>{statusMessage}</p>}
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Enter Your Name' 
                      value={formData.name} 
                      onChange={handleChange} 
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Enter Your Email' 
                      value={formData.email} 
                      onChange={handleChange} 
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      name="message"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      rows="5"
                      placeholder='Enter Your Message' 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                    ></textarea>
                </div>
                <button 
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                  type="submit"
                >
                  Send
                </button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
