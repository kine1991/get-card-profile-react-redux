import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter /*, HashRouter*/ } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'

import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));


// ReactDOM.render(
//     <HashRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </HashRouter>
// , document.getElementById('root'));