import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, data) =>{
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: data
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const purchaseBurgerFail = (error) =>{
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseOrderStart = () =>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseOrder = (orderData) =>{
    return dispatch => {
            dispatch( purchaseOrderStart());
        axios.post('/orders.json', orderData)
            .then(response => { 
               // console.log(response);
                dispatch( purchaseBurgerSuccess(response.data.name, orderData));
                })
            .catch(error => {
                dispatch( purchaseBurgerFail(error));
            });
    };
};


export const fetchOrderSuccess = (data) =>{
    return{
        type: actionTypes.ORDER_SUCCESS,
        orderData: data
    };
};

export const fetchOrderFail = (error) =>{
    return{
        type: actionTypes.ORDER_FAIL,
        error: error
    };
};

export const fetchOrderStart = () =>{
    return{
        type: actionTypes.ORDER_START
    }
}

export const fetchOrder = () =>{
    return dispatch => {
            dispatch( fetchOrderStart());
        axios.get('/orders.json')
            .then(res => { 
                const fetchedOrder = [];
                for(let key in res.data ){
                      fetchedOrder.push({
                          ...res.data[key],
                          id: key
                      });  
                }
                dispatch( fetchOrderSuccess(fetchedOrder));
                })
            .catch(error => {
                dispatch( fetchOrderFail(error));
            });
    };
};





