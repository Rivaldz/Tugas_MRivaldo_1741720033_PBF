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
    </div>
</Router>
  );
}
