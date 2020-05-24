import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';
import Profiles from './components/profiles/Profiles';
import CreateProfile from './components/createProfile/CreateProfile';

interface NavigatorProps {
  updateLogin(status: boolean): void;
}

const Navigator: FC<NavigatorProps> = ({ updateLogin }) => (
  <Router>
    <Switch>
      <Route exact={true} path="/"
        render={props => <Login updateLogin={updateLogin} />}
      />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/profiles" component={Profiles} />
      <Route exact={true} path="/createProfile" component={CreateProfile} />
    </Switch>
  </Router>
);

export default Navigator;