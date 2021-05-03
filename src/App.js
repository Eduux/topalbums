import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import withContainers from 'containers';

import '~/styles/global.scss';

import Routes from 'routes';

import Header from '~/components/Header';
import Bottom from '~/components/Bottom';

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes />

    <Bottom />
  </BrowserRouter>
);

export default withContainers(App);
