import React from 'react';
import { array, string } from 'prop-types';

import ListItem from './partials/ListItem';

import './styles.scss';

const ListAlbums = ({ list, emptyMessage }) => {
  return list.length ? (
    <div className="listAlbumsContainer">
      {list.map((album, index) => (
        <ListItem key={album.id} album={album} index={index} />
      ))}
    </div>
  ) : (
    <div className="listAlbumsEmptyMessage">{emptyMessage}</div>
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
