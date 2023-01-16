import 
{
CATEGORY_LOAD_SUCCESS,CATEGORY_LOAD_FAILED,ADD_CATEGORY_SUCCESS
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
    }
}