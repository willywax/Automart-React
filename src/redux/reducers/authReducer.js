import * as types from '../actions/types';
import { initialState } from "./initialState";


export default function  authReducer(state= initialState.auth, actions) {
    switch(actions.type){
        case types.LOGIN_SUCCESSFULL:

            return {...state, ...actions.userData }
        case types.LOGIN_FAILED:
            return {...state, ...actions.userData }
        default:
            return state;
    }
}