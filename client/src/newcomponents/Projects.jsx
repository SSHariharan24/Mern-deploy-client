import React from 'react'
import crudapp from "../assets/crud.png";
import foodcart from "../assets/food-cart.png";
import moviefinder from "../assets/movie-finder.png";
import weather from "../assets/weather-finder.png";
import qrcode from "../assets/qr-code.png";
import currency from "../assets/currency-convetor.png";
import pics from "../assets/img.jpg";
const projects = [
    {
      id: 1,
      name: "Crud-App",
      technologies: "MERN Stack",
      image: crudapp,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 2,
      name: "Food-Cart",
      technologies: "REACT JS",
      image: foodcart,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 3,
      name: "Movie-Finder",
      technologies: "REACT JS",
      image: moviefinder,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 4,
      name: "Weather-Finder",
      technologies: "REACT JS",
      image: weather,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 5,
      name: "QR-Code Generator",
      technologies: "REACT JS",
      image: qrcode,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 6,
      name: "Currency-Convetor",
      technologies: "REACT JS",
      image: currency,
      github: "https://github.com/SSHariharan24",
    },
    {
      id: 7,
      name: "Signup and Signin Using CRUD",
      technologies: "MERN WITH JWT AUTH",
      image: pics,
      github: "https://github.com/SSHariharan24",
    }
  ];

export const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id="Projects">
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'> My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}
