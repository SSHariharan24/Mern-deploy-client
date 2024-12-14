import React from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
// import './App.css'
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
    
    const [email, setEmail] = useState()
   
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
   
      const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('https://mern-deploy-client-q86t.onrender.com/forgot-password', {email})
      .then(result => {
      
        if(result.data){
            alert("check you email for reset password link")
           navigate('/login') 
        }
        console.log(result.data.status);
        
      })
      .catch(err => console.log(err.message))
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
    {/* Background Image with Blur */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/img1.jpeg')", // Path to your background image
        // filter: "blur(8px)", 
        backgroundSize: "cover", // Cover the full container
        backgroundPosition: "center",
      }}
    ></div>
  
    
    <div className="relative z-10 bg-opacity-30 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Forgot Password</h2>
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
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  )
}
export default ForgetPassword