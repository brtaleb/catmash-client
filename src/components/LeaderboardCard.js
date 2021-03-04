import React from 'react';

const LeaderboardCard = ({cat}) => {
  return (
    <div className="leaderboard-card" key={cat.id}>
      <img className="card-img" src={cat.url} alt={cat.id}/>
      <div className="card-info">Votes: {cat.votes}</div>
    </div>
  )
}
export default LeaderboardCard;
