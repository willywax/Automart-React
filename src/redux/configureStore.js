import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import thunk from "redux-thunk";
import RISI from 'redux-immutable-state-invariant';


export default function configureStore(initialState){
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(thunk, RISI()))
    )

}