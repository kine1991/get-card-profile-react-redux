import React from 'react';
import { Route, Switch /*Redirect*/ } from 'react-router-dom';
import './App.css';

// import Navbar from './components/navbar/navbar.component';
import HeaderComponent from './components/header/header.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import ArticlesComponent from './components/articles/articles.component';
// import ArticleComponent from './components/article/article.component';
import CreateArticlesComponent from './components/create-article/create-article.component';
import NotFoundComponent from './components/not-found/not-found.component';
import DEFAULT_ARTICLES_FOR_LS from './data/dataForLS';


function App() {
  React.useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('articles'))
    if(!articles){
      localStorage.setItem('articles', JSON.stringify(DEFAULT_ARTICLES_FOR_LS))
    }
  }, [])
  return (
    <div className="App">
      {/* <Navbar/> */}
      <HeaderComponent/>

      <div style={{margin: '30px'}}>
        <Switch>
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profiles/:id" component={Profile} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route exact path="/articles" component={ArticlesComponent} />
          <Route path="/create-article" component={CreateArticlesComponent} />
          <Route path="*"><NotFoundComponent /></Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;


