import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/header/header.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import ArticlesComponent from './components/articles/articles.component';
import CreateArticlesComponent from './components/create-article/create-article.component';
import NotFoundComponent from './components/not-found/not-found.component';
import DEFAULT_ARTICLES_FOR_LS from './data/dataForLS';
import SignInComponent from './components/sign-in/sign-in.component';
import SignUpComponent from './components/sign-up/sign-up.component';

import { getCurrentUserAsync } from './redux/user/user.action';

export const App = ({currentUserData, onGetCurrentUser}) => {
  
  React.useEffect(() => {
    onGetCurrentUser()

    const articles = JSON.parse(localStorage.getItem('articles'))
    if(!articles){
      localStorage.setItem('articles', JSON.stringify(DEFAULT_ARTICLES_FOR_LS))
    }
  }, []);
  
  return (
    <div className="App">
      {/* {currentUserData ? currentUserData.uid : 'null'} */}
      {/* <Navbar/> */}
      <HeaderComponent/>

      <div style={{margin: '30px'}}>
        <Switch>
          <Route exact path="/sign-in" component={SignInComponent} />
          <Route exact path="/sign-up" component={SignUpComponent} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profiles/:id" component={Profile} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route exact path="/articles" component={ArticlesComponent} />
          <Route path="/create-article" component={CreateArticlesComponent} />
          <Route path="*"><NotFoundComponent /></Route>
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUserData: state.user.userData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: () => dispatch(getCurrentUserAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);