import React, { useState } from 'react';
import { string, number, oneOfType } from 'prop-types';

import noPoster from '~/assets/no-poster.png';

const Image = ({ src, width, height, alt, ...props }) => {
  const [error, setError] = useState(false);

  return (
    <img
      {...props}
      loading="lazy"
      src={error ? noPoster : src}
      width={width}
      height={height}
      alt={alt}
      onError={() => setError(true)}
    />
  );
};

Image.propTypes = {
  src: string.isRequired,
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  alt: string.isRequired,
};

Image.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default Image;
