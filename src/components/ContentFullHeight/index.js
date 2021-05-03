import React from 'react';
import { element } from 'prop-types';

import './styles.scss';

const ContentFullHeight = ({ children }) => (
  <div className="contentFullHeight">{children}</div>
);

ContentFullHeight.propTypes = {
  children: element.isRequired,
};

export default ContentFullHeight;
