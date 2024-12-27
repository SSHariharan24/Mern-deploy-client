import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    fullDescription:
      "Frontend Development focuses on building the user interface and experience using HTML, CSS, and JavaScript frameworks like React.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    fullDescription:
      "Backend Development handles server-side logic, databases, and API interactions using technologies like Node.js, Python, and databases like MongoDB.",
  },
  {
    id: 3,
    title: "MERN-Stack Development",
    description: "Combining both frontend and backend development skills.",
    fullDescription:
      "MERN stack uses MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime) to build full-stack web applications. This stack is efficient for building modern, scalable apps.",
  },
];

export const Service = () => {
  const [activeServiceId, setActiveServiceId] = useState(null);

  const toggleReadMore = (id) => {
    setActiveServiceId((prevId) => (prevId === id ? null : id)); // Toggle open/close for the clicked service
  };

  return (
    <div className="dark:bg-black  dark:text-white text-center py-24" id="Service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.7 }}
          className="text-4xl font-bold text-center mb-28"
        >
          My Services
        </motion.h2>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial={{ opacity: 0.5 }}
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeIn("right", 0.5)}
              initial={{ opacity: 0 }}
              whileInView="show"
              whileHover="newhover1"
              exit="exit"
              viewport={{ once: false, amount: 0.7 }}
              className={`dark:bg-gray-700 bg-gray-300 px-6 pb-6 rounded-lg hover:shadow-lg transform duration-300 hover:scale-105 ${
                activeServiceId === service.id ? "expanded" : "collapsed"
              }`}
            >
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 dark:text-gray-300">
                {service.description}
                {activeServiceId === service.id && (
                  <span className="dark:text-gray-300"> {service.fullDescription}</span>
                )}
              </p>
              <a
                href="#Service"
                onClick={() => toggleReadMore(service.id)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                {activeServiceId === service.id ? "Read Less" : "Read More"}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
