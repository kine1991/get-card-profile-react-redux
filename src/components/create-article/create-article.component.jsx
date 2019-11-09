import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getArticleFromLS, createArticle } from '../../redux/article/article.action';

const CreateArticleComponent = ({articlesFromLS ,onGetArticleFromLS, onCreateArticle}) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    React.useEffect(() => {
        onGetArticleFromLS(JSON.parse(localStorage.getItem('articles')))
    }, [onGetArticleFromLS]);

    React.useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articlesFromLS))
    }, [articlesFromLS]);


    const handleChangeTitle = event => {
        setTitle(event.target.value);
    };
    const handleChangeBody = event => {
        setBody(event.target.value);
    };
    const onHandleSubmit = event => {
        event.preventDefault();
        const article = {
            id: Date.now(),
            title,
            body
        }
        console.log('createArticle', article)
        onCreateArticle(article)
        // setArticles([article, ...articles])

    };

    return (
        <form onSubmit={onHandleSubmit}>
            <TextField
                label="title"
                margin="normal"
                fullWidth
                variant="outlined"
                onChange={handleChangeTitle}
                value={title}
            />
            <TextField
                label="body"
                margin="normal"
                multiline={true}
                rows={8}
                rowsMax={18}
                variant="outlined"
                fullWidth
                onChange={handleChangeBody}
                value={body}
            />
            <Button type="submit" variant="outlined" color="primary">Create Article</Button>
            {/* <Button variant="outlined" color="primary">Create Article</Button> */}

            {articlesFromLS.length ? 
                articlesFromLS.map(item => {
                    // console.log('item', item)
                    return (
                        <div key={item.id} style={{border: '1px solid black'}}>
                            <h1>{item.title}</h1>
                            {/* <p>{item.body}</p> */}
                            <Button variant="outlined"  color="secondary">Delete Article</Button>
                        </div>
                    )
                })
            
             : <h1>No Data</h1>
            }
        </form>
    )
}

const mapStateToProps = state => {
    return {
        articlesFromLS: state.article.dataFromLS
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetArticleFromLS: (data) => dispatch(getArticleFromLS(data)),
        onCreateArticle: (data) => dispatch(createArticle(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleComponent);