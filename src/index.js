import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reducer from './store/reducer/burgerBuilder';

const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
