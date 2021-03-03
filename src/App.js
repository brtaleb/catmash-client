import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Leaderboard from "./containers/Leaderboard";

const App = () => {

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
