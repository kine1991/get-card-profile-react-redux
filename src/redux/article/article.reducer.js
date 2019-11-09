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
        case articleActionTypes.DELETE_ARTICLE:
            return {
                ...state,
                dataFromLS: state.dataFromLS.filter(item => item.id !== action.payload)
                // dataFromLS: [action.payload, ...state.dataFromLS]
                // items: state.items.filter(item => item !== action.payload),
            }
        default:
            return state
    }
};

export default articleReducer;