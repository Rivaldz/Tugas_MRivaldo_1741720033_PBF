import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";


export default function Main() {
  return (
    <Router>
    <div className="App">
      <nav class=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Rivaldo Shop</a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="/product">Lihat Product</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profil">Profil</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>          
          <Route exact path="/about">
            <About/>
          </Route>          
          <Route exact path="/profil">
            <Profil/>
          </Route>
        </Switch>
    </div>
</Router>
  );
}

function Home(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN AWAL</h2>
    </div>
  );
}
function Product(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN Product</h2>
    </div>
  );
}function Profil(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN profil</h2>
    </div>
  );
}function About(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN about</h2>
    </div>
  );
}

