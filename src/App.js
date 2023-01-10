import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import { BrowserRouter, Routes, Route,Switch,Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//state management context files
import AuthState from './context/auth/AuthState';


function App() {
  return (

    <AuthState>

    <Fragment>
    <ToastContainer />
      <Routes>
        
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register'  element = {<Register/>}/>
      {/* nested routing here */}
      <Route path='/' element = {<Homepage/>}>
        <Route path='dashboard' element = {<Dashboard/>}/>
        <Route path='profile' element = {<Profile/>}/>
      </Route>
      </Routes>
    </Fragment>
    
    </AuthState>

  );
}

export default App;
