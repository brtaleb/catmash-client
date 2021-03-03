import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>

        <Switch>
          <Route path="/leaderboard">
            <h1>leaderbaord</h1>
          </Route>
          <Route path="/">
            <h1>home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
