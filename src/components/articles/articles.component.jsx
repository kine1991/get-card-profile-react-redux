import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        maxWidth: '760px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto auto',
        fontSize: '1.6rem',
        textAlign: 'justify',
        fontWeight: '100',
        lineHeight: '1.2',
        fontFamily: 'Roboto'
        // font-family: 'Roboto', sans-serif;
    //   boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    //   height: '5rem'
    //   background: 'red',

      
    },
  });

const ArticlesComponent = () => {
    const classes = useStyles();
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        setArticles(JSON.parse(localStorage.getItem('articles')))
    }, []);

    // React.useEffect(() => {
    //     setArticles()
    // }, [articles]);

    return (
        <div className={classes.container}>
            {articles.length ? 
                articles.map(item => {
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

export default ArticlesComponent;