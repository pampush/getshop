import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
