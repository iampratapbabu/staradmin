import React,{useReducer, useState,useNavigate} from "react";
import axios from 'axios'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {REGISTER_SUCCESS,REGISTER_FAIL,
    USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGOUT,CLEAR_ERRORS,TOGGLE_LOGIN,TOGGLE_LOADING,SHOW_ALERT,REMOVE_ALERT,CHANGE_PASSWORD_FAILED,
    CHANGE_PASSWORD_SUCCESS,USER_DATA_LOADED
} from '../types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    


const AuthState = (props) =>{
   

    const initialState={
        loading:false,
        showAlert:false,
        alertMsg:"This is alert msg",
        msg:"dfdf",
        user:null,
        isLoggedIn:null,
        errorMessage:"",
        users:[],
    }

    const [state,dispatch]=useReducer(AuthReducer,initialState);
    
    const login = (user) =>{
        axios.post('http://localhost:3200/users/login',user)
        .then(res=>{
            let serverResponse = res;
            console.log(serverResponse.data);
            if(serverResponse.data.token){
                localStorage.setItem('token',serverResponse.data.token);
                dispatch({
                    type:LOGIN_SUCCESS,
    
                })
                loadUser();
            }
            else{
                alert("login Failed");
            }
        })
        .catch(e=>{
            let emsg = e;
            console.log(emsg.response.data)
            alert(emsg.response.data.message)
        })
       
    }

    const register = async(userData) =>{
        console.log(userData);
        await axios.post('http://localhost:3200/users/signup',userData)
        .then(res=>{
            // console.log(res.data);
            let serverResponse = res;
            console.log(serverResponse.data);
            if(serverResponse.data.token){
                localStorage.setItem('token',serverResponse.data.token);
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload:serverResponse.data
                });
                dispatch({
                    type:SHOW_ALERT,
                    payload:res.data.msg
                })
                loadUser();
            }else{
                dispatch({
                    type:REGISTER_FAIL,
                    payload:serverResponse.data
                });
                alert("Registration failed",serverResponse.data);
            }

            
            
        })
        .catch(e=>{
            let emsg = e;
            console.log(emsg.response.data);
            alert(emsg.response.data.errormsg);
            dispatch({
                type:REGISTER_FAIL,
                payload:emsg.response.data.errormsg
            })
        })

    }

    const loadUser = () =>{
        try{
            const res = axios.get('http://localhost:3200/users/protect',{
                headers:{
                    'x-access-token':localStorage.getItem('token')
                }
            }).then(res=>{
                console.log(res);
                dispatch({
                    type:USER_LOADED,
                    payload:res.data.user
                })
            });

        }catch(e){
            console.log(e);
        }


    }

    const logout = () =>{
        localStorage.removeItem('token');
        console.log("user is logged out")
        dispatch({
            type:LOGOUT,
        });
        toast.success("Logged Out Successfully");
        dispatch({
            type:SHOW_ALERT,
            payload:"logged out successfully"
        })
    }

    const changePassword = async(value,userid) =>{
        console.log("change password from auth state",value);
        await axios.patch(`http://localhost:3200/users/changepassword/${userid}`,value)
            .then(res=>{
                console.log(res);
                let serverResponse =res;
                if(serverResponse.data.msg == 'Password Updated'){
                    toast.success(serverResponse.data.msg)
                }
            })
            .catch(err=>{
                let serverResponse = err;
                console.log(serverResponse);
                toast.error(serverResponse.response.data.msg);
            })

    }

    const changeImage = async(value,userid) =>{
        console.log("data from auth state",value);
        await axios.patch(`http://localhost:3200/users/change-image/${userid}`,value)
        .then(res=>{
            console.log(res);
            let serverResponse = res;
            if(res.data.msg == 'Image updated'){
                toast.success(res.data.msg)
            }else{
                toast.error("Image upload failed")
            }
        })
        .catch(err=>{
            console.log(err);
            let serverResponse = err;
            toast.error(serverResponse.response.data.msg);
        })
    }

    const toggleLogin = (value) =>{
        console.log("set toggle login function runs");
        dispatch({
            type:TOGGLE_LOGIN,
            payload:value
        })
    }

    const userData = () =>{
        console.log("user date loaded");
    }

    const createProfile = (id,profileData) =>{
        
        axios.patch(`http://localhost:3200/users/profile/${id}`,profileData)
        .then(res=>{
            console.log(res.data);
            //alert(res.data.msg);
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
            dispatch({
                type:SHOW_ALERT,
                payload:res.data.msg
            })
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            alert(err.message)
        })
    }

    const setLoading = (value)=>{
        dispatch({
            type:TOGGLE_LOADING,
            payload:value
        })
        console.log("this is state loading",state.loading);
        console.log("this is updated loading",value);
    }

    const setAlert = (value) =>{
        console.log("Value of alert=> ",value)
        if(value==false){
            dispatch({
                type:REMOVE_ALERT,
            });
        }else{
            dispatch({
                type:SHOW_ALERT,
            })
        }
        removeAlert();

    }

    const removeAlert = () =>{
        setTimeout(() => {
            dispatch({
                type:REMOVE_ALERT,
            });
        }, 4000);
    }

    const loadUsers = () =>{
        axios.get('http://localhost:3200/users/').then(res=>{
            console.log(res);
            dispatch({
                type:USER_DATA_LOADED,
                payload:res.data.users
            })
        })
        
        //direct accessing state
        //console.log(initialState.alertMsg)
    }

    

    return(
        <AuthContext.Provider
        value={{
            loading:state.loading,
            showAlert:state.showAlert,
            msg:state.msg,
            user:state.user,
            isLoggedIn:state.isLoggedIn,
            errorMessage:state.errorMessage,
            alertMsg:state.alertMsg,
            users:state.users,
            register,
            loadUser,
            login,
            logout,
            changePassword,
            changeImage,
            userData,
            createProfile,
            toggleLogin,
            setLoading,
            setAlert,
            loadUsers,
        }}>
        {props.children}
        </AuthContext.Provider>
    )


}

export default AuthState;