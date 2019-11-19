import React from 'react';
import { connect } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

import { useStyles } from './article.styles'
import SpinnerComponent from '../spinner/spinner.component'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { getArticleAsync } from '../../redux/article/article.action'


const ArticleComponent = ({article, onGetArticle}) => {
    const { id } = useParams();

    React.useEffect(() => {
        onGetArticle(id)
    }, [onGetArticle, id]);

    const classes = useStyles();

    console.log(article)
    return !article ? <SpinnerComponent/> :
    (
        <div className={classes.container}>
            <Button to="/articles" component={Link} className={classes.button} variant="contained" startIcon={<ArrowBackIcon/>} color="primary">Back</Button>
            <h1>{article.title}</h1>
            <div className={classes.dateAndUser}>
                <Typography variant="caption" display="block" gutterBottom>{article.user.email}</Typography>
                <Typography variant="caption" display="block" gutterBottom><Moment format="YYYY.MM.DD" date={article.date} /></Typography>
            </div >
            <p>{article.body}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        article: state.article.article,
        isFetching: state.article.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetArticle: (id) => dispatch(getArticleAsync(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);