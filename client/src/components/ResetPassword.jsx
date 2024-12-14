import React from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
// import './App.css'
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPassword = () => {
    const {id,token} = useParams()
    const [password, setPassword] = useState()
   
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
   
      const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("http://localhost:4000/reset-password/"+token, {password})
      .then(result => {
        if(result.data.status){
           navigate('/login') 
        }
        console.log(result.data);
      })
      .catch(err => console.log(err))
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
  </div>
  )
}
export default ResetPassword