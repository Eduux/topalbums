import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Favorites from '~/pages/Favorites';

import ContentFullHeight from '~/components/ContentFullHeight';

const Routes = () => (
  <ContentFullHeight>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/favorites" component={Favorites} exact />
    </Switch>
  </ContentFullHeight>
);

export default Routes;
