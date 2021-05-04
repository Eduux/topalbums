import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useAlbums } from '~/containers/albums';

import './styles.scss';

const SearchAlbums = () => {
  const {
    actions: { searchAlbums },
  } = useAlbums();

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    searchAlbums(searchInput);
    // eslint-disable-next-line
  }, [searchInput]);

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
            placeholder="Search for best album..."
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAlbums;
