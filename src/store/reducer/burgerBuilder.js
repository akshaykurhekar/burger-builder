import { act } from 'react-dom/test-utils';
import * as actionTypes from '../action/actionTypes';
import {utilityObject } from '../utility';

const initialState = {
    Ingredient: null,
    totalPrices: 4,
    error: false
};

const Ingredient_Prices ={
    salad:0.5,
    bacon:1.3,
    cheese:0.4,        
    meat:2
 }  

 const addIngredient = (state, action) =>{
    const updatedIngredient = {[action.IngredientName]: state.Ingredient[action.IngredientName] + 1};
    const updatedIngredients = utilityObject(state.Ingredient,updatedIngredient);
    const updatedState = { 
        Ingredient:updatedIngredients,
        totalPrices: state.totalPrices + Ingredient_Prices[action.IngredientName]
    }            
    return utilityObject(state, updatedState);
 };

 const removeIngredient = (state, action) =>{
    const updatedIngredientRemove = {[action.IngredientName]: state.Ingredient[action.IngredientName] - 1};
    const updatedIngredientsRemove = utilityObject(state.Ingredient,updatedIngredientRemove);
    const updatedStateRemove = { 
        Ingredient:updatedIngredientsRemove,
        totalPrices: state.totalPrices - Ingredient_Prices[action.IngredientName]
    }            
    return utilityObject(state, updatedStateRemove);
 };

 const setIngredient = (state, action) =>{
    const newObject = {
        Ingredient: {
            salad: action.Ingredient.salad,
            bacon: action.Ingredient.bacon,
            cheese: action.Ingredient.cheese,        
            meat: action.Ingredient.meat
        },
        totalPrices: 4,
        error: false
    }
    return utilityObject(state,newObject);
 }

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENT: return setIngredient(state, action);
        
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
                ...state,
                error: true
            }                        
        default: return state; 
    }   
    
}

export default ingredientsReducer;