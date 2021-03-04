import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Leaderboard from "./containers/Leaderboard";
import {catService} from "./services/catService";

const App = () => {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    catService
      .getCats()
      .then(response => {
        setCats(response.data.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  const updateCats = (catId) => {
    setCats(cats.map(cat => {
      if(cat.id === catId) return {
        ...cat,
        votes: ++cat.votes
      }
      else return cat;
    }))
  };

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/leaderboard">
            <Leaderboard cats={cats} />
          </Route>
          <Route path="/">
            <Home  cats={cats} updateCats={updateCats}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;
