import React from 'react';

import Menu from './partials/Menu';
import SearchAlbums from './partials/SearchAlbums';

const Header = () => {
  return (
    <>
      <SearchAlbums />
      <Menu />
    </>
  );
};

export default Header;
