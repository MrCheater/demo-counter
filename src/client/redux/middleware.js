import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from './api';

//TODO. It's not working
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() :
    compose;

//TODO. It's not working
const enhancer = composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({ api })
    )
);

export default {
    middleware : thunk.withExtraArgument({ api }),
    enhancer //TODO. It's not working
};