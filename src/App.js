import React from 'react';
import './App.css';
import Admin from './containers/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Admin}/>
      </Switch>
    </Router>
  );
}

export default App;
