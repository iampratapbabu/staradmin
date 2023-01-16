import React,{useReducer} from 'react';
import axios from 'axios';
import CategoriesContext from './CategoriesContext';
import CategoriesReducer from './CategoriesReducer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 
{
    CATEGORY_LOAD_FAILED,CATEGORY_LOAD_SUCCESS,ADD_CATEGORY_SUCCESS
}
from '../types';

const CategoriesState = (props) =>{
    const initialState={
        mycategory:"This is my category",
        allCategories:[]
    }

    const [state,dispatch]=useReducer(CategoriesReducer,initialState);

    const demofun = () =>{
        toast.success("this is demo function");
    }

    const getAllCategories = async() =>{
        await axios.get('http://localhost:3200/category').then(res=>{
            console.log(res);
            dispatch({
                type:CATEGORY_LOAD_SUCCESS,
                payload:res.data.categories
            })
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                type:CATEGORY_LOAD_FAILED,
                payload:err.response
            })
        })
    }

    const createCategory = async(value) =>{
        console.log("data sent to backend",value);
        await axios.post('http://localhost:3200/category',value).then(res =>{
            console.log(res);
            toast.success("category added");
            dispatch({
                type:ADD_CATEGORY_SUCCESS,
                payload:res.data.category
            })
        })
        .catch(err=>{
            console.log(err);
            toast.warning("Category addition failed");
        })
    }

    const uploadImage = (value) =>{
        console.log("image",value)
    }

    return(
        <CategoriesContext.Provider
        value={{
            mycategory:state.mycategory,
            allCategories:state.allCategories,
            demofun,
            createCategory,
            uploadImage,
            getAllCategories
        }}>
        {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesState;

