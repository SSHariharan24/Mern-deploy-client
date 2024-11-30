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
function App() {
  return (
    <div>
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
  )
}

export default App
