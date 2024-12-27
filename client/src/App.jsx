import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home"
import ForgetPassword from "./components/ForgetPassword"
import {ToastContainer} from "react-toastify"
import ResetPassword from './components/ResetPassword';

import { ThemeProvider, useTheme } from "./newcomponents/ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button className='hidden' onClick={toggleTheme}>
      {isDarkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-yellow-400"/>}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
    <div className="App">
    <ThemeToggleButton />
      <BrowserRouter>
      <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Signin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
        <Route path='/forget-password' element={<ForgetPassword/>}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword/>}></Route>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
      </div>
      </ThemeProvider>
  )
}

export default App
