import profileActionTypes from './profile.types';

const INITIAL_STATE = {
    searchField: '',
    isFetching: false,
    users: [],
    error: undefined
};

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case profileActionTypes.SEARCH_PROFILE:
            return {
                ...state,
                searchField: action.payload,
            }
        case profileActionTypes.GET_PROFILE_START:
            return {
                ...state,
                isFetching: true,
            }
        case profileActionTypes.GET_PROFILES_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetching: false,
            }
        case profileActionTypes.GET_PROFILES_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default profileReducer;