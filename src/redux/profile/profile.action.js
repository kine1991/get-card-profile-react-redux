import profileActionTypes from './profile.types';

export const searchProfile = text => ({
    type: profileActionTypes.SEARCH_PROFILE,
    payload: text
});