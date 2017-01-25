import React, {Component} from 'react';
import {connect} from 'react-redux';

export const requireAuthentication = (InputComponent) => {

  class AuthenticatedComponent extends Component {
    componentWillMount () {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps);
    }

    checkAuth ({ isAuthenticated, router }) {
      if (!isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;

        router.replace({
          pathname: '/login',
          state: { nextPathname: redirectAfterLogin }
        })
      }
    }

    render() {
      const { isAuthenticated } = this.props

      return (
        <div>
          {isAuthenticated === true
            ? <InputComponent {...this.props}/>
            : null
          }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.login.isAuthenticated
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
