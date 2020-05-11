import Header from './Component/header';
import Profil from './Component/Profil';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './container/BlogPost';
import News from './Component/News';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router, 
  Switch,
  Link,
  Route,
  Redirect,
  useHistory

  } from "react-router-dom";

export const AuthContext = React.createContext(null);

function App() {
  return (
    <Router>
    <div className="App">


      <Header/>
      <br/>
      <AuthButton/>
      <Switch>

        <Route path="/home" component={ Home }>
          <Home/>
        </Route>

        <Route path="/news" component={News}>
        </Route>

        <Route path="/profile" component={ Profil }>
          <Profil/>
        </Route>

        <Route path="/login" component={Login}>
          <Login/>
        </Route>

        <Route path="/register" component={Register}>
        </Route>

        <PrivateRoute path="/profile">
        <Profil/>
        </PrivateRoute>

      </Switch>
    </div>
</Router>
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

export default App;
