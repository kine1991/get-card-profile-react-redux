import userActionTypes from './user.types';

const INITIAL_STATE = {
    userData: null,
    isFetching: false,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.GET_CURRENT_USER_START:
            return {
                ...state,
                isFetching: true,
            }
        case userActionTypes.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userData: action.payload
            }
        case userActionTypes.GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;

// import profileActionTypes from './profile.types';

// const INITIAL_STATE = {
//     searchField: '',
//     isFetching: false,
//     users: [],
//     error: undefined
// };

// const profileReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case profileActionTypes.SEARCH_PROFILE:
//             return {
//                 ...state,
//                 searchField: action.payload,
//             }
//         case profileActionTypes.GET_PROFILE_START:
//             return {
//                 ...state,
//                 isFetching: true,
//             }
//         case profileActionTypes.GET_PROFILES_SUCCESS:
//             return {
//                 ...state,
//                 users: action.payload,
//                 isFetching: false,
//             }
//         case profileActionTypes.GET_PROFILES_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload,
//                 isFetching: false,
//             }
//         default:
//             return state;
//     }
// }

// export default profileReducer;