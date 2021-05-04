import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { string } from 'prop-types';

import './styles.scss';

const ErrorMessage = ({ children }) => (
  <div className="errorContainer">
    <BiErrorAlt size={45} />
    <h4>{children}</h4>
  </div>
);

ErrorMessage.propTypes = {
  children: string.isRequired,
};

export default ErrorMessage;
