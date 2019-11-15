import { auth } from '../../firebase/firebase.utils';
import userActionTypes from './user.types';

export const getCurrentUserStart = () => ({
    type: userActionTypes.GET_CURRENT_USER_START
});

export const getCurrentUserSuccess = (userData) => ({
    type: userActionTypes.GET_CURRENT_USER_SUCCESS,
    payload: userData
});

export const getCurrentUserFailure = (error) => ({
    type: userActionTypes.GET_CURRENT_USER_FAILURE,
    payload: error
});


export const getCurrentUserAsync = () => {
    return dispatch => {
        auth.onAuthStateChanged(userData => {
            if(userData){
                dispatch(getCurrentUserSuccess({uid: userData.uid, displayName: userData.displayName, email: userData.email, phoneNumber: userData.phoneNumber, photoURL: userData.photoURL}));
            } else{
                dispatch(getCurrentUserSuccess(null));
            }

            // console.log(userData)
            // dispatch(getCurrentUserSuccess({uid: userData.uid, displayName: userData.displayName, email: userData.email, phoneNumber: userData.phoneNumber, photoURL: userData.photoURL}));
        }, error => {
            console.log('error', error)
            dispatch(getCurrentUserFailure(error));
        })

    }
}