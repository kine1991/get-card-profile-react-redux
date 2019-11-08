// import React, { Component } from 'react'

// class CreateArticleComponent extends Component {

//     state = {
//         title: '',
//         body: ''
//     }

//     handleChangeText = event => {
//         this.setState()
//         setText(event.target.value);
//     };
//     handleChangeBody = event => {
//         setBody(event.target.value);
//     };
//     onHandleSubmit = event => {
//         event.preventDefault();
//         const article = {
//             id: Date.now(),
//             text,
//             body
//         }
//         setArticles([...articles, article])

//     };

//     render() {
//         return (
//             <form onSubmit={this.onHandleSubmit}>
//                 <TextField
//                     label="title"
//                     margin="normal"
//                     fullWidth
//                     onChange={this.handleChangeText}
//                     value={this.text}
//                 />
//                 <TextField
//                     label="body"
//                     margin="normal"
//                     fullWidth
//                     onChange={this.handleChangeBody}
//                     value={this.body}
//                 />
//                 <Button type="submit">Default</Button>
//             </form>
//         )
//     }
// }

// export default CreateArticleComponent;


import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateArticleComponent = () => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        setArticles(JSON.parse(localStorage.getItem('articles')))
        // console.log(JSON.parse(localStorage.getItem('articles'))) 
    }, []);

    React.useEffect(() => {
        // console.log('d',articles);
        if(articles){
            // console.log('articles');
            localStorage.setItem('articles', JSON.stringify(articles));
        } else{
            // console.log(articles);
        }
    }, [articles]);

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
        setArticles([...articles, article])

    };

    return (
        <form onSubmit={onHandleSubmit}>
            <TextField
                label="title"
                margin="normal"
                fullWidth
                onChange={handleChangeTitle}
                value={title}
            />
            <TextField
                label="body"
                margin="normal"
                fullWidth
                onChange={handleChangeBody}
                value={body}
            />
            <Button type="submit">Default</Button>

            {articles.length ? 
                articles.map(item => {
                    console.log('item', item)
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>

                        </div>
                    )
                })
            
             : <h1>No Data</h1>
            }
        </form>
    )
}

export default CreateArticleComponent;