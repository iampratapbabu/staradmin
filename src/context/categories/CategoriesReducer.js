import 
{
CATEGORY_LOAD_SUCCESS,CATEGORY_LOAD_FAILED,ADD_CATEGORY_SUCCESS, GET_SINGLE_CATEGORY_FAILED, GET_SINGLE_CATEGORY_SUCCESS, DELETE_SINGLE_CATEGORY_SUCCESS
}
from '../types';

export default (state,action) =>{
    switch(action.type){
        case CATEGORY_LOAD_SUCCESS:
            return{
                ...state,
                allCategories:action.payload
        }

        case ADD_CATEGORY_SUCCESS:
            return{
                ...state,
                allCategories:[...state.allCategories,action.payload]
        }

        case GET_SINGLE_CATEGORY_SUCCESS:
            return{
                ...state,
                singleCategory:action.payload
            }
        case GET_SINGLE_CATEGORY_FAILED:
            return{
                ...state,
                singleCategory:null
            }
        case DELETE_SINGLE_CATEGORY_SUCCESS:
            return{
                ...state,
                singleCategory:null,
                allCategories:state.allCategories.filter(category=>category._id !== action.payload)
            }

        default:
            return state

    }
}