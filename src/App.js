import React from 'react';
import './App.css';
import Admin from './containers/Admin';
import NotFound from './components/Admin/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
