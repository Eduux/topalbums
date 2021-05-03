import React from 'react';
import { BiAlbum } from 'react-icons/bi';

import './styles.scss';

const Banner = () => {
  return (
    <div className="bannerContainer">
      <h2>Top 100 Albums Itunes</h2>
      <BiAlbum size={30} />
    </div>
  );
};

export default Banner;
