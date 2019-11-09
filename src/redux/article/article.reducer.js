import articleActionTypes from './article.types';

const INITIAL_STATE = {
    dataFromLS: []
};

const articleReducer = (state = INITIAL_STATE, action) => {
    console.log('reducer', action.payload)
    switch(action.type){
        case articleActionTypes.GET_ARTICLES_FROM_LS:
            return {
                ...state,
                dataFromLS: action.payload
            }
        default:
            return state
    }
};

export default articleReducer;