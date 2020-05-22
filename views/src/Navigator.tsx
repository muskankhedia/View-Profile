import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';

const Navigator: FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/" component={Login}  />
    </Switch>
  </Router>
);

export default Navigator;