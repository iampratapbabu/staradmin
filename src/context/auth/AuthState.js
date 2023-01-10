import React,{useReducer, useState,useNavigate} from "react";
import axios from 'axios'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {REGISTER_SUCCESS,REGISTER_FAIL,
    USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGOUT,CLEAR_ERRORS,TOGGLE_LOGIN,TOGGLE_LOADING,SHOW_ALERT,REMOVE_ALERT} from '../types';
    


const AuthState = (props) =>{
   

    const initialState={
        loading:false,
        showAlert:false,
        alertMsg:"This is alert msg",
        msg:"dfdf",
        user:null,
        isLoggedIn:null,
        errorMessage:"",
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

    const register = (userData) =>{
        console.log(userData);
        axios.post('http://localhost:3200/users/signup',userData)
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
        //localStorage.removeItem('token');
        console.log("user is logged out")
        dispatch({
            type:LOGOUT,
        })
        dispatch({
            type:SHOW_ALERT,
            payload:"logged out successfully"
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
            register,
            loadUser,
            login,
            logout,
            userData,
            createProfile,
            toggleLogin,
            setLoading,
            setAlert,
        }}>
        {props.children}
        </AuthContext.Provider>
    )


}

export default AuthState;