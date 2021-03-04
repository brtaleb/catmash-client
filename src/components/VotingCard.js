import React from 'react';

const VotingCard = ({cat, vote}) => {
  return (
    <div className="voting-card">
      <img
        className="card-img"
        onClick={() => vote(cat.id)}
        src={cat.url}
        alt={cat.id}
      />
    </div>
  )
}
export default VotingCard;
