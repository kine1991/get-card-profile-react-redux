import articleActionTypes from './article.types';

const INITIAL_STATE = {
    // dataFromLS: [],
    articles: [],
    article: null,
    isFetching: false,
    isFetchingCreate: false,
    isFetchingDelete: false,
    error: null,
};

const articleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case articleActionTypes.GET_ARTICLES_START:
            return {
                ...state,
                isFetching: true
            }
        case articleActionTypes.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                isFetching: false
            }
        case articleActionTypes.GET_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
            
        case articleActionTypes.GET_ARTICLE_START:
            return {
                ...state,
                isFetching: true
            }
        case articleActionTypes.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                article: action.payload,
                isFetching: false
            }
        case articleActionTypes.GET_ARTICLE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }

        case articleActionTypes.CREATE_ARTICLE_START:
            return {
                ...state,
                isFetchingCreate: true
            }
        case articleActionTypes.CREATE_ARTICLE_SUCCESS:
            return {
                ...state,
                articles: [action.payload, ...state.articles],
                isFetchingCreate: false
            }
        case articleActionTypes.CREATE_ARTICLE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingCreate: false
            }

        case articleActionTypes.DELETE_ARTICLE_START:
            return {
                ...state,
                isFetchingDelete: true
            }
        case articleActionTypes.DELETE_ARTICLE_SUCCESS:
            return {
                ...state,
                articles: state.articles.filter(item => item.id !== action.payload),
                isFetchingDelete: false
            }
        case articleActionTypes.DELETE_ARTICLE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingDelete: false
            }
        default:
            return state
    }
};

export default articleReducer;
        
        
        
        
        
        
        
        
        
        
        
// case articleActionTypes.DELETE_ARTICLE:
//     return {
//         ...state,
//         dataFromLS: state.dataFromLS.filter(item => item.id !== action.payload)
//         // dataFromLS: [action.payload, ...state.dataFromLS]
//         // items: state.items.filter(item => item !== action.payload),
//     }
