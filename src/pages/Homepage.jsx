import react, { Fragment, useEffect } from 'react';
import {Routes, Route,Switch,Link, Outlet,useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';



const Homepage = () =>{

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/dashboard')
        }else{
            navigate('/login')
        }
    },[])

    return(
        <Fragment>
            
                <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
            </Grid>
            
            <Grid container spacing={0}>
           
                <Grid item xs={1.7}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10.3}>
                    <div className="padding-custom">
                     <Outlet/> {/*this is used when nested routing is used */}
                     </div>
                </Grid>
            
            </Grid>
            
            
        </Fragment>
    )
}

export default Homepage;