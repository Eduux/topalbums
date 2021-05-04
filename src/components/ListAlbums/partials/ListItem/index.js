import React from 'react';
import { object } from 'prop-types';
import { BiAlbum } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useFavorites } from '~/containers/favorites';

import Image from '~/components/Image';
import PositionAlbum from '~/components/PositionAlbum';

import './styles.scss';

const ListItem = ({ album }) => {
  const {
    data: { list },
    actions: { setFavorite, removeFavorite },
  } = useFavorites();

  const isFavorite = list.findIndex(item => item.id === album.id) !== -1;

  return (
    <div className="listItemContainer">
      <PositionAlbum position={album.position} />
      <Image
        src={album.image}
        width={120}
        alt={`Album image ${album.position}`}
      />

      <p className="listItemAlbumName" title={album.name}>
        {album.name}
      </p>
      <p className="listItemAlbumTracks">{`${album.tracksCount} tracks`}</p>

      <div className="listItemAlbumArtist">
        <div>
          <BiAlbum size={40} />
        </div>
        <div>
          <p title={album.artist}>{album.artist}</p>
          <p>{album.category}</p>
        </div>
        <div>
          {isFavorite ? (
            <AiFillHeart
              data-testid="favorite-icon"
              size={25}
              onClick={() => removeFavorite(album.id)}
            />
          ) : (
            <AiOutlineHeart
              data-testid="favorite-icon"
              size={25}
              onClick={() => setFavorite(album)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  album: object.isRequired,
};

export default ListItem;
