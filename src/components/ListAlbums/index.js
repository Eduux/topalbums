import React, { useState } from 'react';
import { array, string } from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage';

import ListItem from './partials/ListItem';
import DetailsItem from './partials/DetailsItem';

import './styles.scss';

const ListAlbums = ({ list, emptyMessage }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(false);

  return list.length ? (
    <>
      <div className="listAlbumsContainer">
        {list.map(album => (
          <ListItem key={album.id} album={album} onClick={setSelectedAlbum} />
        ))}
      </div>

      <DetailsItem
        albumSelected={selectedAlbum}
        onClose={() => setSelectedAlbum(false)}
      />
    </>
  ) : (
    <ErrorMessage>{emptyMessage}</ErrorMessage>
  );
};

ListAlbums.propTypes = {
  list: array,
  emptyMessage: string,
};

ListAlbums.defaultProps = {
  list: [],
  emptyMessage: 'No albums found.',
};

export default ListAlbums;
