import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { getArticleFromLS } from '../../redux/article/article.action'


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
  });

const ArticlesComponent = ({articlesFromLS, onGetArticleFromLS}) => {
    // console.log(articlesFromLS)
    const classes = useStyles();

    React.useEffect(() => {
        onGetArticleFromLS(JSON.parse(localStorage.getItem('articles')))
    }, [onGetArticleFromLS]);

    return (
        <div className={classes.container}>
            {articlesFromLS.length ? 
                articlesFromLS.map(item => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <hr/>
                        </div>
                    )
                })
            
             : <h1>No Data</h1>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articlesFromLS: state.article.dataFromLS
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetArticleFromLS: (data) => dispatch(getArticleFromLS(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);