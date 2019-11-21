import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme,/* makeStyles*/} from '@material-ui/core/styles';

import HeaderComponent from './components/header/header.component';
// import Header2 from './components/header2/header2.component'
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import ArticlesComponent from './components/articles/articles.component';
import ArticleComponent from './components/article/article.component';
import CreateArticlesComponent from './components/create-article/create-article.component';
import NotFoundComponent from './components/not-found/not-found.component';
import SignInComponent from './components/sign-in/sign-in.component';
import SignUpComponent from './components/sign-up/sign-up.component';
import GlobalThemeComponent from './components/global-theme/global-theme.component'
// import { useStyles } from './App.styles'

import { getCurrentUserAsync } from './redux/user/user.action';
import PaletteListComponent from './components/palette-list/palette-list.component';
import PaletteComponent from './components/palette/palette.component';
// import PaletteComponent from './components/palette-list/palette-list.component';

export const App = ({currentUserData, isFetching, isDarkMode, currentColor, onGetCurrentUser}) => {
  // console.log('App++++')
  // console.log(isDarkMode)

  const theme = createMuiTheme({
    backgroundMain: isDarkMode ? currentColor.darkTheme.backgroundMain: currentColor.lightTheme.backgroundMain,
    backgroundHeader: isDarkMode ? currentColor.darkTheme.backgroundHeader: currentColor.lightTheme.backgroundHeader,
    colorMain: isDarkMode ? currentColor.darkTheme.colorMain: currentColor.lightTheme.colorMain,
    colorHeader: isDarkMode ? currentColor.darkTheme.colorHeader: currentColor.lightTheme.colorHeader,
  });


  
  React.useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  React.useEffect(() => {
    // console.log('isDarkMode')
    // console.log(isDarkMode)
  }, [isDarkMode])

  // const classes = useStyles(isDarkMode);

  // const useStyles = makeStyles(theme => {
  //   console.log('props App', theme)
  //   return {
  //     container: {
  //       backgroundColor: 'brown',
  //       color: 'blue',
  //       // backgroundColor: theme.backgroundMain,
  //       // color: theme.colorMain,
  //     }
  //   }
  // });

  // const classes = useStyles();

  return (
    
    
    // <div className="App" >
      <ThemeProvider theme={theme}>
        <HeaderComponent currentUserData={currentUserData} isFetching={isFetching} />
        <GlobalThemeComponent>
          {/* <div style={{padding: '30px'}}> */}
            <Switch>
              <Route exact path="/sign-in" component={SignInComponent} />
              <Route exact path="/sign-up" component={SignUpComponent} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profiles/:id" component={Profile} />
              <Route path="/about" render={() => <h1>About</h1>} />
              <Route exact path="/articles" component={ArticlesComponent} />
              <Route exact path="/articles/:id" component={ArticleComponent} />
              <Route path="/create-article" component={CreateArticlesComponent} />
              <Route exact path="/settings/palette" component={PaletteListComponent} />
              <Route exact path="/settings/palette/:paletteId" component={PaletteComponent} />
              <Route path="*"><NotFoundComponent /></Route>
            </Switch>
          {/* </div> */}
        </GlobalThemeComponent>
    </ThemeProvider>
      // </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUserData: state.user.userData,
    isFetching: state.user.isFetching,
    isDarkMode: state.palette.isDarkMode,
    currentColor: state.palette.currentColor
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: () => dispatch(getCurrentUserAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);