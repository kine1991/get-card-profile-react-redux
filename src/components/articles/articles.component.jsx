import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import TextTruncate from 'react-text-truncate';



import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getArticlesAsync } from '../../redux/article/article.action';
import { useStyles } from './articles.styles'
import SpinnerComponent from '../spinner/spinner.component';

const ArticlesComponent = ({ articles, onGetArticles }) => {
    const classes = useStyles();

    React.useEffect(() => {
        onGetArticles()
    }, [onGetArticles]);

    return (
        <div className={classes.container}>
            {articles.length ?
                articles.map(item => {
                    return (
                        <div key={item.id} className={classes.article}>
                                <h1>{item.title}</h1>
                                <div  className={classes.dateAndUser}>
                                    <Typography variant="caption" display="block" gutterBottom>{item.user.email}</Typography>
                                    <Typography variant="caption" display="block" gutterBottom><Moment format="YYYY.MM.DD" date={item.date} /></Typography>
                                </div >
                                <TextTruncate
                                    line={6}
                                    element="span"
                                    truncateText="…"
                                    text={item.body}
                                />
                                <Button to={`/articles/${item.id}`} component={Link} color="primary">Open</Button>

                        </div>
                    )
                })

                :
                <SpinnerComponent/>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.article.articles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetArticles: () => dispatch(getArticlesAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);