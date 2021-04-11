import *  as actionTypes from '../action/actionTypes';
import { utilityObject} from '../utility';

const initialState = {
    idToken: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state) =>{
   return utilityObject(state, { error: null, loading: true} );
};

const authSuccess = (state, action) =>{
    return utilityObject(state,{
        idToken: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authFail = (state, action) =>{
    return utilityObject(state, {
        loading: false,
        error: action.error
     });
};

const authReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state);
           
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
                
        case actionTypes.AUTH_FAIL: return authFail(state, action);
            
        default: 
            return state;
    }    
    
};

export default authReducer;