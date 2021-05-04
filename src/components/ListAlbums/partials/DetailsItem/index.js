import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiAlbum } from 'react-icons/bi';
import { object, func, bool, oneOfType } from 'prop-types';

import Image from '~/components/Image';
import PositionAlbum from '~/components/PositionAlbum';

import '../styles.scss';
import './styles.scss';

const DetailsItem = ({ albumSelected, onClose }) => {
  return (
    <div
      className={`detailsItemModal ${albumSelected ? 'detailsItemActive' : ''}`}
    >
      {albumSelected && (
        <div className="detailsItemContainer itemContainer">
          <AiFillCloseCircle
            data-testid="close-icon"
            size={40}
            onClick={onClose}
          />
          <PositionAlbum position={albumSelected.position} />
          <div className="detailsItem">
            <div>
              <Image
                className="imageStyles"
                src={albumSelected.image}
                alt={albumSelected.name}
              />
            </div>
            <div>
              <p className="itemAlbumName">{albumSelected.name}</p>
              <p className="itemAlbumTracks">{`${albumSelected.tracksCount} tracks`}</p>
              <p className="itemAlbumTracks">
                Price: <strong>{albumSelected.price}</strong>
              </p>
              <div className="itemAlbumArtist">
                <div>
                  <BiAlbum size={40} />
                </div>
                <div>
                  <p>{albumSelected.artist}</p>
                  <p>{albumSelected.category}</p>
                </div>
              </div>
              <a
                href={albumSelected.linkMusic}
                target="_blank"
                rel="noreferrer"
                className="detailsItemHref"
              >
                Link Itunes
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DetailsItem.propTypes = {
  albumSelected: oneOfType([object, bool]).isRequired,
  onClose: func.isRequired,
};

export default DetailsItem;
