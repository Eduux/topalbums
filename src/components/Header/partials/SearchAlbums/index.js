import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { useAlbums } from '~/containers/albums';

import './styles.scss';

const SearchAlbums = () => {
  const {
    actions: { searchAlbums },
  } = useAlbums();

  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = e => {
    e?.preventDefault();
    history.push('');

    searchAlbums(searchInput);
  };

  return (
    <div className="headerContainer">
      <div className="headerStyles">
        <form onSubmit={handleSubmit} className="headerContainerForm">
          <button type="submit">
            <FaSearch size={16} />
          </button>
          <input
            value={searchInput}
            onChange={({ target: { value } }) => setSearchInput(value)}
            name="search"
            placeholder="Search for best album..."
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchAlbums;
