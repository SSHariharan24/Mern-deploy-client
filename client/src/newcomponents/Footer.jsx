import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import 'remixicon/fonts/remixicon.css';
import { motion } from "framer-motion";
import {fadeIn} from './variants.js'
const Footer = () => {
  return (
    <footer className="bg-black text-white dark:bg-gray-800 dark:text-white  py-8">
      <motion.div
      variants={fadeIn("right",0.2)}
      initial={{opacity:0}}
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
      className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Hariharan s s</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the INDIA, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hariharan SS. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
  <motion.a
  href="#"
  initial={{ y: 0 }}
  whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
  transition={{ type: "spring", stiffness: 300 }}
  className="fixed right-4 bottom-4 bg-gradient-to-r from-green-400 to-blue-500 shadow-sm px-3 py-2 md:px-4 md:py-3 rounded-full text-lg z-50"
  aria-label="Scroll to top"
>
  <i className="ri-arrow-up-line text-white"></i>
</motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;