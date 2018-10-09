import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import PioneerList from './components/PioneerList';
import Timeline from './components/Timeline';
import PioneerBoard from './components/PioneerBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/users' component={ Users } />
            <Route exact path='/pioneers' component={ PioneerList } />
            <Route exact path='/pioneers/:pioneerId' component={ PioneerBoard } />
            <Route exact path='/timeline' component={ Timeline } />
         </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
