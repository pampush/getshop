import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MobilePage from './pages/MobilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/mobile">
          <MobilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
