import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/layout/Header.scss';

const Header = () => {
  const [active, setActive] = useState(false);

  const showItem = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__text">
          <h1>MirianDez</h1>
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
          <ul>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/" onClick={showItem}>
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
