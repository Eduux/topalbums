import React from 'react';
import { array, string } from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage';

import ListItem from './partials/ListItem';

import './styles.scss';

const ListAlbums = ({ list, emptyMessage }) => {
  return list.length ? (
    <div className="listAlbumsContainer">
      {list.map(album => (
        <ListItem key={album.id} album={album} />
      ))}
    </div>
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
