import React from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";

import { getArticleAsync } from '../../redux/article/article.action'


const ArticleComponent = ({onGetArticle}) => {
    const { id } = useParams();

    React.useEffect(() => {
        onGetArticle(id)
    }, [id]);

    // console.log(id)
    return (
        <div>
            ArticleComponent

        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.article.article
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetArticle: (id) => dispatch(getArticleAsync(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);