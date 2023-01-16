import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route,Switch,Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//css files
import './assets/css/demo_1/style.css';
import './assets/css/shared/style.css';
import './assets/images/favicon.ico';
import './assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css';
import './assets/vendors/iconfonts/ionicons/dist/css/ionicons.css';
import './assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/vendors/css/vendor.bundle.addons.css';

//state management context files
import AuthState from './context/auth/AuthState';
import Users from './pages/Users';
import Categories from './pages/Categories';
import CategoriesState from './context/categories/CategoriesState';


function App() {
  return (

    <AuthState>
    <CategoriesState>

    <Fragment>
    <ToastContainer />
      <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register'  element = {<Register/>}/>
      {/* nested routing here */}
      <Route path='/' element = {<Homepage/>}>
        <Route path='dashboard' element = {<Dashboard/>}/>
        <Route path='profile' element = {<Profile/>}/>
        <Route path='users' element = {<Users/>}/>
        <Route path='categories' element = {<Categories/>}/>
      </Route>
      </Routes>
    </Fragment>

    </CategoriesState>
    </AuthState>

  );
}

export default App;
