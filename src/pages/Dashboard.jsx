import react, { Fragment,useEffect,useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';
import Alert from '../components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dropdown from 'react-bootstrap/Dropdown';

import TopBar from '../components/Dashboard/TopBar';
import TopSummary from '../components/Dashboard/TopSummary';
import TopSection from '../components/Dashboard/TopSection';
import MidSection from '../components/Dashboard/MidSection';
import LastSection from '../components/Dashboard/LastSections';


const Dashboard = () =>{
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const {login,logout,userdata,msg,user,isLoggedIn,loadUser,alertMsg,showAlert,setAlert} = authContext;

    const [auth,setAuth] = useState('false')

    useEffect(()=>{
        if(!(localStorage.getItem('token'))){
            navigate('/login')
        }
        else{
            console.log("user is registered and logged in");
            loadUser();
            
        }
        
    },[])

    const Mylogout = () =>{
        logout();
        navigate('/login');
    }

    



    return(
        <Fragment>
            


        
          <div class="content-wrapper">

                       
          {showAlert && <Alert msg={["success","LoggedIn Successully"]}/>}

            
            <TopBar/>
            <button className='btn btn-primary mr-2' onClick={Mylogout}>Logout</button>
            <button className='btn btn-success' onClick={()=>{navigate('/profile')}}>Profile</button>
            <TopSummary/>
            <TopSection/>
            <MidSection/>
            <LastSection/>

            

            


          
          </div>
            

        </Fragment>
       
    )
}

export default Dashboard;