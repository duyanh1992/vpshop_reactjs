import React from 'react';
import './App.css';
import Admin from './containers/Admin';
import MainSite from './containers/MainSite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route path='/' component={MainSite}/>
      </Switch>
    </Router>
  );
}

export default App;
