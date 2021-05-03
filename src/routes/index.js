import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';

import ContentFullHeight from '~/components/ContentFullHeight';

const Routes = () => (
  <ContentFullHeight>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </ContentFullHeight>
);

export default Routes;
