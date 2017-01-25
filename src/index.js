import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer'
import createStore from './store/Store'
import routes from './routes';

const store = createStore()
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <AppContainer store={store} routes={routes} />,
  MOUNT_NODE
);
