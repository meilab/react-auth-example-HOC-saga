import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from './layouts/CoreLayout/CoreLayout'
import Home from './components/Home'
import LoginContainer from './containers/LoginContainer'
import Private from './components/Private'
import NotFound from './components/NotFound'
import { requireAuthentication } from './containers/AuthenticatedComponent';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginContainer} />
    <Route path="private" component={requireAuthentication(Private)}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
