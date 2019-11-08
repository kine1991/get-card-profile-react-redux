import axios from 'axios'
import profileActionTypes from './profile.types';

export const searchProfile = text => ({
    type: profileActionTypes.SEARCH_PROFILE,
    payload: text
});

export const getProfilesStart = () => ({
    type: profileActionTypes.GET_PROFILE_START
});
export const getProfilesSuccess = (data) => ({
    type: profileActionTypes.GET_PROFILES_SUCCESS,
    payload: data
});
export const getProfilesFailure = (error) => ({
    type: profileActionTypes.GET_PROFILES_FAILURE,
    payload: error
});

export const getProfilesAsync = id => {
    let url
    id ? url = `https://jsonplaceholder.typicode.com/users?id=${id}` : url = 'https://jsonplaceholder.typicode.com/users'
    return dispatch => {
        dispatch(getProfilesStart());
        axios.get(url)
        .then(users => dispatch(getProfilesSuccess(users.data)))
        .catch(error => dispatch(getProfilesFailure(error)))
    }
}