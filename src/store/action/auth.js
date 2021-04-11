import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    };
};

export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const auth = (email, password, isSignup) =>{
    return dispatch =>{
        dispatch(authStart());
        const authObject = {
            email: email,
            password: password,
            returnSecureToken: true   
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdM5NG3VyntBHLZ2wP2JxQPYpjFGh4f3A';

         if(!isSignup){
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdM5NG3VyntBHLZ2wP2JxQPYpjFGh4f3A';
            }

        axios.post(url, authObject)
        .then( res =>{
            dispatch( authSuccess(res.data.idToken, res.data.localId));
        }).catch(error => {
            dispatch(authFail(error.response.data.error));
        });
    };
};
