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
  const [optionSearch, setOptionSearch] = useState('name');

  const handleSubmit = e => {
    e?.preventDefault();
    history.push('');

    searchAlbums(searchInput, optionSearch);
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

        <div className="headerAdvancedSearch">
          Filter by:
          <div>
            <button
              type="button"
              className={optionSearch === 'name' && 'active'}
              onClick={() => setOptionSearch('name')}
            >
              Album
            </button>
            <button
              type="button"
              className={optionSearch === 'artist' && 'active'}
              onClick={() => setOptionSearch('artist')}
            >
              Artist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAlbums;
