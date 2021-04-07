import * as actionTypes from '../action/actionTypes';

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
        case actionTypes.SET_INGREDIENT:
            return{
                ...state,
                Ingredient: {
                    salad: action.Ingredient.salad,
                    bacon: action.Ingredient.bacon,
                    cheese: action.Ingredient.cheese,        
                    meat: action.Ingredient.meat
                },
                error: false
            }
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
                ...state,
                error: true
            }                        
        default: return state; 
    }   
    
}

export default ingredientsReducer;