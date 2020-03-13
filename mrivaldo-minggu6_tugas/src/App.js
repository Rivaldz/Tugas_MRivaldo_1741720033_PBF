import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Link
} from "react-router-dom";


export default function Main() {
  return (
    <Router>
    <div className="App">
      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Rivaldo Shop</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="/product">Lihat Product</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profil">Profil</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
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
  let { path, url} = useRouteMatch();
  return (
    <div>
      <h2>INI ADALAH HALAMAN PRODUCT</h2>
      {/* <div class="container"> */}
        <Link to={`${url}/Elektronik,Murah Meriah Bosss`}>
        <button type="button" className="btn btn-primary" > Elektronik  </button>
        {/* Jancuocok */}
         </Link>
      {/* </div> */}

      <button type="button" className="btn btn-danger" href={`${url}/makanan`}> Makanan</button>
      <button type="button" className="btn btn-info" href={`${url}/fasion`}> Fasion</button>

      <Switch>
        <Route exact path={path}>
            <h3> Please Pilih Katagori.</h3>
        </Route>
        <Router path={`${path}/:kategori`}>
          <Produk />
        </Router>
      </Switch>
    </div>
  );
}

function Produk(){
  let { kategori } = useParams();
  return(
    <div>
      <h3>
        { kategori }
      </h3>
    </div>

  );
}

function Profil(){
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

