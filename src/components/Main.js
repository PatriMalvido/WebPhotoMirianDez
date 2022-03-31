import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/layout/Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="texts">
        <h1>Choose Landscapes or Portraits</h1>
        <h3>Delicate and natural photos</h3>

        <div className="buttons">
          <a href="https://www.instagram.com/miriandez/">
            <button>Discover me</button>
          </a>
          <Link to='/about'>
          <button>Meet me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
