import React from 'react';
import { Route, Switch /*Redirect*/ } from 'react-router-dom';
import './App.css';

// import Navbar from './components/navbar/navbar.component';
import HeaderComponent from './components/header/header.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import NotFoundComponent from './components/not-found/not-found.component';


function App() {
  // console.log(useParams())
  return (
    <div className="App">
      {/* <Navbar/> */}
      <HeaderComponent/>

      <div style={{margin: '30px'}}>
        <Switch>
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profiles/:id" component={Profile} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="*"><NotFoundComponent /></Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
