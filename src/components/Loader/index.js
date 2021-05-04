import React from 'react';
import { BiAlbum } from 'react-icons/bi';

import './styles.scss';

const Loader = () => (
  <div className="loaderContainer">
    <BiAlbum size={50} />
    <p>Loading...</p>
  </div>
);

export default Loader;
