import React from 'react';

import { useFavorites } from '~/containers/favorites';

import Banner from '~/components/Banner';
import ListAlbums from '~/components/ListAlbums';

import './styles.scss';

const Favorites = () => {
  const {
    data: { list },
  } = useFavorites();

  return (
    <div className="favoritesContainer">
      <Banner title="My favorite albums" />
      <ListAlbums
        list={list}
        emptyMessage="No albums found in the favorites category."
      />
    </div>
  );
};

export default Favorites;
