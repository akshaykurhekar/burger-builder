import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, data) =>{
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: data
    };
};

export const purchaseBurgerFail = (error) =>{
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseOrderStart = (orderData) =>{
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => { 
                dispatch( purchaseBurgerSuccess(orderData));
                })
            .catch(error => {
                dispatch( purchaseBurgerFail(error));
            });
    };
};

