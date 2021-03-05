import React, {useEffect, useState} from 'react';
import {getTwoRandomElements} from "../utils/utils";
import {catService} from "../services/catService";
import VotingCard from "../components/VotingCard";

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
      <div className="voting-page">
        <div className="left">
          <VotingCard cat={currentCats[0]} vote={vote} />
        </div>

        <div className="right">
          <VotingCard cat={currentCats[1]} vote={vote} />
        </div>

        <button className="skip-button" onClick={() => setCurrentCats(getTwoRandomElements(cats))}>
          Skip
        </button>
      </div>
    )
  }
  else return (<h3>Loading...</h3>)
}
export default Home;
