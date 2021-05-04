import React from 'react';
import { number } from 'prop-types';

import './styles.scss';

const PositionAlbum = ({ position }) => {
  return <div className="positionAlbumContainer">{`#${position}`}</div>;
};

PositionAlbum.propTypes = {
  position: number.isRequired,
};

export default PositionAlbum;
