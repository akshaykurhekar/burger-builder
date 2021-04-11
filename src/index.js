import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // for async dispatch action fun in actions

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import burgerBuilderReducer from './store/reducer/burgerBuilder';
import ordersReducer from './store/reducer/orders';
import authReducer from './store/reducer/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: ordersReducer,
    auth: authReducer
});

const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store} > 
        <BrowserRouter>
            <App/>  
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
