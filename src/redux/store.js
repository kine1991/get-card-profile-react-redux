import { createStore, applyMiddleware/*, compose*/ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {createLogger} from 'redux-logger'

import rootReducer from './root-reducer';

// const logger = createLogger();
// let middleware = [logger];

let middleware = [];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;