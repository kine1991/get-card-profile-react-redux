import profileActionTypes from './profile.types';

const INITIAL_STATE = {
    searchField: ''
};

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case profileActionTypes.SEARCH_PROFILE:
            return {
                ...state,
                searchField: action.payload,
                xx: 'ff'
            }
        default:
            return state;
    }
}

export default profileReducer;