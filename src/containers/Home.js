import React, {useEffect, useState} from 'react';
import {getTwoRandomElements} from "../utils/utils";
import {catService} from "../services/catService";

const Home = ({cats, updateCats}) => {

  const [currentCats, setCurrentCats] = useState([]);

  useEffect(() => {
    setCurrentCats(getTwoRandomElements(cats));
  }, [cats]);

  const vote = (catId) => {
    catService
      .postVote(catId)
      .then(() => {
        updateCats(catId);
      })
  }

  if(currentCats.length > 0){
    return (
      <div>
        <div onClick={() => vote(currentCats[0].id)}>
          <img width="80px" src={currentCats[0].url} alt={currentCats[0].id}/>
        </div>

        <div onClick={() => vote(currentCats[1].id)}>
          <img width="80px" src={currentCats[1].url} alt={currentCats[1].id}/>
        </div>

        <button onClick={() => setCurrentCats(getTwoRandomElements(cats))}>
          Skip
        </button>
      </div>
    )
  }
  else return <div/>
}
export default Home;
