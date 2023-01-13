import {REGISTER_SUCCESS,REGISTER_FAIL,
    USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,
LOGOUT,CLEAR_ERRORS, TOGGLE_LOGIN,TOGGLE_LOADING,SHOW_ALERT,REMOVE_ALERT,USER_DATA_LOADED,DELETE_USER,UPDATE_USER,ADD_USER} from '../types';

export default (state,action) =>{
    switch(action.type){

        case REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                msg:"Registered Successfully"
        }
        case REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn:false,
                errorMessage:action.payload,
                msg:"Registration failure"
        }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                msg:action.payload
        }      
        case LOGOUT:
            return{
                ...state,
                user:null,
                isLoggedIn:false,
              
        }     
        case REGISTER_SUCCESS:
            return{
                ...state,
                msg:"Registration Success",
                isLoggedIn:true,
                
        }
        case TOGGLE_LOGIN:
            return{
                ...state,
                isLoggedIn:action.payload
        }
        case TOGGLE_LOADING:
            return{
                ...state,
                loading:action.payload
        }
        case USER_LOADED:
            return{
                ...state,
                user:action.payload
        }
        case SHOW_ALERT:
            return{
                ...state,
                alertMsg:action.payload,
                showAlert:true,
        }
        case REMOVE_ALERT:
            return{
                ...state,
                showAlert:false,
                msg:"",
        }
        case USER_DATA_LOADED:
            return{
                ...state,
               users:action.payload,
               loading:false,
        }
        case DELETE_USER:
                return{
                    ...state,
                    users:state.users.filter(user=>user._id !== action.payload)
        }
        case UPDATE_USER:
            return{
                ...state,
                users:action.payload
        }
        case ADD_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }

        


        default:
            return state
    }
}