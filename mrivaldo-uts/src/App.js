import Header from './Component/header';
import Profil from './Component/Profil';
import Login from './Component/Login'
import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, 
  Switch,
  Link,
  Route 
  } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/profile" component={ Profil }>
          <Profil/>
        </Route>
        <Route path="/login" component={Login}>
          <Login/>
        </Route>
      </Switch>
    </div>
</Router>
  );
}

export default App;
