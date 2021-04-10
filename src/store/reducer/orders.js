import * as actionTypes from '../action/actionTypes';
import {utilityObject} from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased:false
}

const purchaseBurgerSuccess = (state, action) =>{
    const newOrder = {
        ...action.orderData,
        id: action.orderId,              
    }
    const newObject = {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased:true
    }
    return utilityObject(state, newObject);
}

const fetchOrderSuccess = (state, action) =>{
    const newState ={
        orders: action.orderData,
        loading:false
    }
    return utilityObject(state, newState);
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        
        case actionTypes.PURCHASE_INIT: return utilityObject(state, { purchased:false });

        case actionTypes.PURCHASE_BURGER_START: return utilityObject(state, { loading: true });
               
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
            
        case actionTypes.PURCHASE_BURGER_FAIL: return utilityObject(state,{ loading:false });

        case actionTypes.ORDER_START: return utilityObject(state,{loading: true });

        case actionTypes.ORDER_SUCCESS: return fetchOrderSuccess(state, action);            
            
        case actionTypes.ORDER_FAIL: return utilityObject(state, {loading: false });

        default: return state;            
    }
};

export default reducer;