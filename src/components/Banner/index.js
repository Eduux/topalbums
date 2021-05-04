import React from 'react';
import { string } from 'prop-types';

import './styles.scss';

const Banner = ({ title }) => {
  return (
    <div className="bannerContainer">
      <h2>{title}</h2>
    </div>
  );
};

Banner.propTypes = {
  title: string.isRequired,
};

export default Banner;
