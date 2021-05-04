import React from 'react';

import { useAlbums } from '~/containers/albums';

import Menu from '~/components/Menu';
import SearchAlbums from '~/components/SearchAlbums';

const Header = () => {
  const {
    data: { list },
  } = useAlbums();

  return (
    <>
      {!!list.length && (
        <>
          <SearchAlbums />
          <Menu />
        </>
      )}
    </>
  );
};

export default Header;
