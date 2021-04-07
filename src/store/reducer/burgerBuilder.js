import * as actionTypes from '../action/actionTypes';

const initialState = {
    Ingredient: {
        salad:0,
        cheese:0,
        bacon:0,    
        meat:0
    },
    totalPrices: 10
};

const Ingredient_Prices ={
    salad:0.5,
    cheese:0.4,
    bacon:1.3,    
    meat:2
 }  

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                Ingredient:{
                    ...state.Ingredient,
                    [action.IngredientName]: state.Ingredient[action.IngredientName] + 1
                },
                totalPrices: state.totalPrices + Ingredient_Prices[action.IngredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                Ingredient:{
                    ...state.Ingredient,
                    [action.IngredientName]: state.Ingredient[action.IngredientName] - 1
                },
                totalPrices: state.totalPrices - Ingredient_Prices[action.IngredientName]

            }               
        default: return state; 
    }   
    
}

export default ingredientsReducer;