import React,{useReducer} from 'react';
import axios from 'axios';
import CategoriesContext from './CategoriesContext';
import CategoriesReducer from './CategoriesReducer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 
{

}
from '../types';

const CategoriesState = (props) =>{
    const initialState={
        mycategory:"This is my category"
    }

    const [state,dispatch]=useReducer(CategoriesReducer,initialState);

    const demofun = () =>{
        toast.success("this is demo function");
    }

    return(
        <CategoriesContext.Provider
        value={{
            mycategory:state.mycategory,
            demofun
        }}>
        {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesState;

