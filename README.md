Login flow using redux-saga react-router Higher-Order-Component
Using Grid Layout system: you need to enable **Experimental Web Platform features** in [chrome://flags/](chrome://flags/) to see layout

## Features
* Grid layout: The amazing new layout system regarding two dimension layout
* redux-saga: handle the Async actions
  * login flow
* Higher-Order-Component (HOC) : AuthenticatedComponent
  * User HOC to protected some routes, need to login first. use `requireAuthentication` to wrap the protected routes

```js
export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginContainer} />
    <Route path="private" component={requireAuthentication(Private)}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
```

* redux-form: Store the form in redux store
* Ramda: functional data process

### Login flow
* use HOC to protect the private routes.
* the login state is stored in Redux store
* the HOC will redirect to `login` route, if user is not logged in, and the destination path will be stored in `location` for later use

```js
// AuthenticatedComponent.js
  checkAuth ({ isAuthenticated, router }) {
    if (!isAuthenticated) {
      let redirectAfterLogin = this.props.location.pathname;

      router.replace({
        pathname: '/login',
        state: { nextPathname: redirectAfterLogin }
      })
    }
  }
```
* The login saga will handle the Async Authentication etc. After successful Auth, the destination path (`redirectTo`) will be stored in redux store.
* The LoginContainer component will redirect after successful login.

```js
  checkAuthAndRedirect({ login, router }) {
    const { redirectTo, isAuthenticated } = login

    if ( isAuthenticated === true ) {
      router.replace(redirectTo)
    }
  }
```

Special thanks:
The Grid layout is based on [http://chris.house/blog/building-a-home-page-with-grid/](http://chris.house/blog/building-a-home-page-with-grid/)
the login flow is inspired by : [react-redux-jwt-auth-example](https://github.com/joshgeller/react-redux-jwt-auth-example)