import React from 'react';

const Leaderboard = ({cats}) => {
  return (
    <div className="leaderboard">
      {
        cats
          .sort((a,b) => a.votes < b.votes ? 1 : -1)
          .map(cat => {
          return (
            <div key={cat.id}>
              <img width="80px" src={cat.url} alt={cat.id}/>
              <span>Votes: {cat.votes} - {cat.id}</span>
            </div>
          )
        })
      }
    </div>
  )
}
export default Leaderboard;
