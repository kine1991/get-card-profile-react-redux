import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import TextTruncate from 'react-text-truncate';


import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { getArticlesAsync } from '../../redux/article/article.action'


const useStyles = makeStyles({
    container: {
        maxWidth: '760px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto auto',
        fontSize: '1.4rem',
        textAlign: 'left',
        fontWeight: '100',
        lineHeight: '1.5',
        wordSpacing: '3px',
        // letterSpacing: '1px',
        fontFamily: 'Roboto'
        // font-family: 'Roboto', sans-serif;
        //   boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        //   height: '5rem'
        //   background: 'red',


    },
    containerCircularProgress: {
        margin: 'auto auto'
    },
    dateAndUser: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
        backgroundColor: 'rgba(236, 236, 236, .5)',
    },
    article: {
        // backgroundColor: 'rgba(210, 215, 211, 1)',
        // backgroundColor: 'rgba(232, 236, 241, 1)',
        // backgroundColor: 'rgba(243, 241, 239, 1)',
        // backgroundColor: 'rgba(243, 241, 239, 1)',
        // backgroundColor: 'rgba(218, 223, 225, .1)',
        // backgroundColor: 'rgba(242, 241, 239, 1)',
        // backgroundColor: 'rgba(236, 236, 236, 1)',
        // backgroundColor: 'rgba(210, 215, 211, 1)',
        // backgroundColor: 'rgba(236, 240, 241, 1)',
        // backgroundColor: 'rgba(232, 232, 232, 0.5)',
        backgroundColor: 'rgba(238, 238, 238, 1)',
        
        marginBottom: '5rem',
        padding: '2rem',
        borderRadius: '10px'
    },
    card: {
        marginBottom: '5rem'
    }
});

const ArticlesComponent = ({ articles, onGetArticles }) => {
    // console.log(articles)
    const classes = useStyles();

    React.useEffect(() => {
        onGetArticles()
    }, [onGetArticles]);

    return (
        <div className={classes.container}>
            {articles.length ?
                articles.map(item => {
                    return (
                        // <div key={item.id}>
                        //     <Card className={classes.card}>
                        //         <CardActionArea>
                        //             <CardContent>
                        //                 <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                        //                 <Typography variant="body2" color="textSecondary" component="p">{item.body}</Typography>
                        //             </CardContent>
                        //         </CardActionArea>
                        //         <CardActions>
                        //             <Button size="small" color="primary">
                        //                 Share
                        //             </Button>
                        //             <Button size="small" color="primary">
                        //                 Learn More
                        //             </Button>
                        //         </CardActions>
                        //     </Card>
                        // </div>

                        <div key={item.id} className={classes.article}>
                            {/* <Paper> */}
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
                                    // textTruncateChild={<a href="#">Read on</a>}
                                    // textTruncateChild={<Button color="primary" >Open</Button>}
                                />
                                <Button color="primary">Open</Button>

                            {/* </Paper> */}
                        </div>
                    )
                })

                :
                <div className={classes.containerCircularProgress}>
                    <CircularProgress />
                </div>
                // <h1>No Data</h1>
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

// import React from 'react'

// const ArticlesComponent = () => {
//     return (
//         <div>
//             ArticlesComponent
//         </div>
//     )
// }

// export default ArticlesComponent;