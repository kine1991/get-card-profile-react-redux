import articleActionTypes from './article.types';

export const getArticleFromLS = (data) => ({
    type: articleActionTypes.GET_ARTICLES_FROM_LS,
    payload: data
});


export const createArticle = (data) => ({
    type: articleActionTypes.CREATE_ARTICLE,
    payload: data
});