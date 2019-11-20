import articleActionTypes from './article.types';
import { firestore } from '../../firebase/firebase.utils'


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

// -------------------------------------
// -------------------------------------
const getArticleStart = () => ({
    type: articleActionTypes.GET_ARTICLE_START
});

const getArticleSuccess = (data) => ({
    type: articleActionTypes.GET_ARTICLE_SUCCESS,
    payload: data
});

const getArticleFailure = (error) => ({
    type: articleActionTypes.GET_ARTICLE_FAILURE,
    payload: error
});

export const getArticleAsync = (id) => {
    // console.log(id)
    return dispatch => {
        // console.log('docRef')
        dispatch(getArticleStart());
        const docRef = firestore.collection('articles').doc(id);
        docRef.get().then(querySnapshot => {
            // console.log('querySnapshot', {id: querySnapshot.id, ...querySnapshot.data()})
            // console.log(querySnapshot)
            let article = {id: querySnapshot.id, ...querySnapshot.data()}
            // querySnapshot.forEach(doc => {
            //     articles.push({id: doc.id, ...doc.data()})
            // })
            dispatch(getArticleSuccess(article));
        }).catch(error => {
            dispatch(getArticleFailure(error));
        });
    }
};

// -------------------------------------
// -------------------------------------

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
    return dispatch => {
        dispatch(deleteArticlesStart());
        firestore.collection("articles").doc(id.toString()).delete().then(() => {
            dispatch(deleteArticlesSuccess(id));
        }).catch((error) => {
            dispatch(deleteArticlesFailure(error));
        });
    }
};