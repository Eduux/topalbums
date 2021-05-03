import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './styles.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="headerContainer">
      <div className="headerStyles">
        <div className="headerContainerInput">
          <div>
            <FaSearch size={16} />
          </div>
          <input
            value={searchInput}
            onChange={({ target: { value } }) => setSearchInput(value)}
            name="search"
            placeholder="Search for best albums..."
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
