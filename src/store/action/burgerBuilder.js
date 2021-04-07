import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) =>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        IngredientName: name
    }
}

export const removeIngredient = (name) =>{
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        IngredientName: name
    }
}

export const setIngredient = (Ingredient) =>{
    return{
        type: actionTypes.SET_INGREDIENT,
        Ingredient: Ingredient 
    }
}

export const fetchIngredientsFailed = () =>{
    return{
        type: actionTypes.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredient = () => {
    return dispatch => {
        axios.get('https://react-burger-app-87e69-default-rtdb.firebaseio.com/ingredient.json')
         .then(response => {
             dispatch(setIngredient(response.data)) // dispatch async action
         }).catch(error => {
             dispatch(fetchIngredientsFailed())
         });
    }
}