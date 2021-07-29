import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MobilePage from './pages/MobilePage';
import FinalPage from './pages/FinalPage';

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
        <Route path="/final">
          <FinalPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
