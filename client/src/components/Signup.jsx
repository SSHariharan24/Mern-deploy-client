import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
// import './App.css'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  // axios.defaults.withCredentials = true;
 
    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/register', {name, email, password})
    .then(result => {console.log(result)
        navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/img1.jpeg')", // Path to the image in the public folder
      // filter: "blur(5px)", // Apply blur to the background image
      backgroundSize: "cover", // Ensures the background image covers the full container
      backgroundPosition: "center",
    }}
  ></div>

  {/* Signup Form Container with Glass Effect */}
  <div className="relative z-10 p-8 rounded-lg shadow-lg w-full max-w-md  bg-opacity-40 backdrop-blur-md border border-white/30">
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white">Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-white">Password</label>
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Sign Up
      </button>
    </form>
    <div className="text-center mt-4">
      <a href="/login" className="text-indigo-600 hover:underline">
        Already have an account? Sign In
      </a>
    </div>
  </div>
</div>

  )
}

export default Signup
