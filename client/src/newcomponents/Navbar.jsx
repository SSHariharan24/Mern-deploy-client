import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white/50 dark:bg-gray-700 backdrop-blur-lg text-black dark:text-white  px-6 md:px-16 lg:px-24 z-50 shadow-md"
      id="navbar"
    >
      <div className="container py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="hidden lg:block text-2xl font-bold">Hariharan</div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#Hero" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
            Home
          </a>
          <a href="#About" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
            About
          </a>
          <a href="#Service" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
            Services
          </a>
          <a href="#Projects" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#Contacts" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
            Contacts
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition-transform"
        >
          {darkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-yellow-400"/>}
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 md:hidden bg-white/15 dark:bg-gray-700 backdrop-blur-lg`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a
            href="#Hero"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#About"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#Service"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#Projects"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#Contacts"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            Contacts
          </a>

          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-800 hover:scale-105 transition-transform"
          >
            {darkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-yellow-400"/>}
          </button>
        </div>
      </div>
    </nav>
  );
};
