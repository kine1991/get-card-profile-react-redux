import articleActionTypes from './article.types';

const INITIAL_STATE = {
    dataFromLS: []
};

const articleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case articleActionTypes.GET_ARTICLES_FROM_LS:
            return {
                ...state,
                dataFromLS: action.payload
            }
        case articleActionTypes.CREATE_ARTICLE:
            return {
                ...state,
                dataFromLS: [action.payload, ...state.dataFromLS]
            }
        default:
            return state
    }
};

export default articleReducer;