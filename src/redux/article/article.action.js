import articleActionTypes from './article.types';
import { firestore } from '../../firebase/firebase.utils'
// import userActionTypes from '../user/user.types';

// export const getArticleFromLS = (data) => ({
//     type: articleActionTypes.GET_ARTICLES_FROM_LS,
//     payload: data
// });


// export const createArticle = (data) => ({
//     type: articleActionTypes.CREATE_ARTICLE,
//     payload: data
// });

// const deleteArticle = (id) => ({
//     type: articleActionTypes.DELETE_ARTICLE,
//     payload: id
// });


// const createArticleStart = () => {
//     return {
//         type: articleActionTypes.CREATE_ARTICLE_START
//     }
// };
const createArticleStart = () => ({
    type: articleActionTypes.CREATE_ARTICLE_START
});

const createArticleSuccess = (data) => ({
    type: articleActionTypes.CREATE_ARTICLE_SUCCESS,
    payload: data
});

const createArticleFailure = (error) => ({
    type: articleActionTypes.CREATE_ARTICLE_FAILURE,
    payload: error
});

export const createArticleAsync = (data) => {
    return dispatch => {
        dispatch(createArticleStart());
        const collectionRef = firestore.collection('articles');
        collectionRef.add(data).then((item) => {
            dispatch(createArticleSuccess({id: item.id, ...data}));
        }).catch(error => {
            dispatch(createArticleFailure(error));
        })  
    }
};

const getArticlesStart = () => ({
    type: articleActionTypes.GET_ARTICLES_START
});

const getArticlesSuccess = (data) => ({
    type: articleActionTypes.GET_ARTICLES_SUCCESS,
    payload: data
});

const getArticlesFailure = (error) => ({
    type: articleActionTypes.GET_ARTICLES_FAILURE,
    payload: error
});

export const getArticlesAsync = () => {
    return dispatch => {
        dispatch(getArticlesStart());
        const collectionRef = firestore.collection('articles');
        collectionRef.get().then(querySnapshot => {
            let articles = []
            querySnapshot.forEach(doc => {
                articles.push({id: doc.id, ...doc.data()})
            })
            dispatch(getArticlesSuccess(articles));
        }).catch(error => {
            dispatch(getArticlesFailure(error));
        });
    }
};

const deleteArticlesStart = () => ({
    type: articleActionTypes.DELETE_ARTICLE_START
});

const deleteArticlesSuccess = (data) => ({
    type: articleActionTypes.DELETE_ARTICLE_SUCCESS,
    payload: data
});

const deleteArticlesFailure = (error) => ({
    type: articleActionTypes.DELETE_ARTICLE_FAILURE,
    payload: error
});

export const deleteArticleAsync = (id) => {
    console.log(id)
    return dispatch => {
        dispatch(deleteArticlesStart());
        firestore.collection("articles").doc(id.toString()).delete().then(() => {
            console.log('delete')
            dispatch(deleteArticlesSuccess(id));
        }).catch((error) => {
            console.log('errror', error)
            dispatch(deleteArticlesFailure(error));
        });
    }
};