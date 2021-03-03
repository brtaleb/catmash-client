import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <h2>CATMASH</h2>
      </Link>

      <div>
        <Link to="/">
          <span className="nav-item">
            Vote
          </span>
        </Link>

        <Link to="/leaderboard">
          <span className="nav-item">
            Leaderboard
          </span>
        </Link>
      </div>
    </div>
  )
}
export default Header;
