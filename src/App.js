import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '~/styles/global.scss';

import withContainers from 'containers';

import Routes from 'routes';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default withContainers(App);
