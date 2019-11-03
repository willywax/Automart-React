import * as types from "./types";
import * as userApi from '../../api/userApi';

export function logInSuccessfully(userDataResponse) {

    return {
        type: types.LOGIN_SUCCESSFULL, userData: userDataResponse
    }
}
export function logInFailed(userDataResponse) {

    return {
        type: types.LOGIN_FAILED, userData: userDataResponse
    }
}



// export function logIn(user) {
//
//     return async function (dispatch) {
//         try{
//             let userResponse = await userApi.loginUser(user);
//             dispatch(logInSuccessfully(userResponse))
//         } catch(error){
//             console.log('Error', error)
//         }
//     }
// }

export function logIn(user) {

    return function (dispatch) {
        return userApi.loginUser(user).then(userData =>{

            dispatch(logInSuccessfully(userData.data));
        }).catch(error=>{

            dispatch(logInFailed(error.response.data));
            console.log('Error', error)
        })
    }
}