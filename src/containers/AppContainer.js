import React, {Component, PropTypes} from 'react';
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

class AppContainer extends Component {
  render() {
    const { routes, store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)

    return (
      <Provider store={store} >
        <div style={{ height: '100%'}} >
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
    // routes : PropTypes.function.isRequired,
    store  : PropTypes.object.isRequired
};

export default AppContainer;