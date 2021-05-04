import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiAlbum } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

import './styles.scss';

const Menu = () => {
  return (
    <div className="menuContainer">
      <div>
        <ul>
          <li>
            <NavLink to="/" exact>
              <BiAlbum size={20} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" exact>
              <AiOutlineHeart size={20} />
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
