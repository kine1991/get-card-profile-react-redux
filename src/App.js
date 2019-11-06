import React from 'react';
import { Route, Switch, /*Redirect*/ } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar.component'
import Profiles from './components/profiles/profiles.component'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{margin: '30px'}}>
        <Switch>
          {/* <Route exact path="/" component /> */}
          <Route exact path="/" component={Profiles} />
          <Route path="/about" render={() => <h1>About</h1>} />

          {/* <Route 
            exact 
            path="/signin" 
            render={() => currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>} />
          /> */}
        </Switch>

      </div>
    </div>
  );
}

export default App;
