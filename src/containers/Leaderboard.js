import React from 'react';
import LeaderboardCard from "../components/LeaderboardCard";

const Leaderboard = ({cats}) => {
  return (
    <div className="leaderboard">
      {
        cats
          .sort((a,b) => a.votes < b.votes ? 1 : -1)
          .map(cat => {
          return (
            <LeaderboardCard cat={cat}/>
          )
        })
      }
    </div>
  )
}
export default Leaderboard;
