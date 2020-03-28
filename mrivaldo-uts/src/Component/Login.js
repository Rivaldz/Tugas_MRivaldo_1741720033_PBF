import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Link,
  Route,
  Redirect,
  useHistory,
  useLocation
  } from "react-router-dom";

const Login = () => {
    return(
    <div className="auth-page">
        <AuthButton/>
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="register">
                  Need an account?
                </Link>
              </p>

              {/* <ListErrors errors={this.props.errors} /> */}

              <form >
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                    //   value={email}
                    //   onChange={this.changeEmail} 
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                    //   value={password}
                    //   onChange={this.changePassword} 
                    />
                  </fieldset>

                  <LoginPage/>

                  {/* <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    // disabled={this.props.inProgress}
                    >
                    Sign in
                  </button> */}

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );

}

const fakeAuth = {
  isAuthenticated : false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({children, ...rest}){
  return(
    <Route
      {...rest}
      render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: {from: location}
            }}
            />
        )
       }
    />
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  }

  return (
    <div>
      <p> you must log in to view the page at {from.pathname}</p>
      {/* <button onClick={login}>Log In</button> */}
        <button 
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={login}
        >
                    Sign in
        </button>
    </div>
  );
}

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
        >
        SignOut
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default Login;