import React from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
// import './App.css'
import { useNavigate,Link } from 'react-router-dom';

export const Signin = () => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
   
      const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('https://mern-deploy-client-q86t.onrender.com/login', { email, password})
      .then(result => {console.log(result.data)
        if(result.data.Status === 'Success'){
          if(result.data.role === 'admin'){
            navigate('/user')
          }else{
            navigate('/Home')
          }
            
        }
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
      // filter: "blur(8px)", // Apply blur to the background image
      backgroundSize: "cover", // Ensures the background image covers the full container
      backgroundPosition: "center",
    }}
  ></div>

  {/* Sign In Form with Glass Effect */}
  <div className="relative z-10 bg-opacity-30 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h2>
    <form onSubmit={handleSubmit}>
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
        Sign In
      </button>
    </form>
    <br />
    <Link to="/forget-password" className="text-indigo-800 hover:underline">Forgot Password</Link>
    <div className="text-center mt-4">
      <a href="/register" className="text-indigo-600 hover:underline">
        Don’t have an account? Sign Up
      </a>
    </div>
  </div>
</div>

  )
}
export default Signin