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
  Link,
  useLocation,
  useHistoy
} from "react-router-dom";

export default function NestingExample(){
  return(
    <Router>
      <div className="App">
      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Rivaldo Shop</a>
          </li>
          <li className="nav-item">
            <Link to="topics"> 
             <a className="nav-link">Lihat Product</a>
            </Link>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profil">Profil</a>
            </li>
          </ul>
        </nav>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr/> */}
        <Switch>
          <Route exact path="/">
              {/* <Topics /> */}
              <Home/>
          </Route>

          <Route exact path="/about">
              <About/>
          </Route>

          <Route exact path="/profil">
            <Profil/>
          </Route>

          <Route path="/topics">
              <Topics/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Topics(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Daftar Kategori</h2>

         <div> 
          <Link to={`${url}/Elektronik`}>
            <button type="button" className="btn btn-primary" > Elektronik  </button> 
          </Link>

          <Link to={`${url}/Fasion`}>
            <button type="button" className="btn btn-danger" > Fasion  </button>
          </Link>

          <Link to={`${url}/Computer`}>
             <button type="button" className="btn btn-info" > Computer  </button>
          </Link>
        </div>

      <Switch>
        <Route exact path={path}>
        <h3> Please Select a Topics.</h3>
        </Route>

        <Route exact path={`${path}/:topicId`}>
          <Topic/>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {

  let {terter} = useParams();
    return(
      <h4>{terter}</h4>
    )
}

function Elektronik(){
  return(
    <h4> INi ADALAH ELEKTRONIK</h4>
  )
}

function Main() {
  return (
    <Router>
      <h4>INI adalah Main</h4>
    <div className="App">
      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Rivaldo Shop</a>
          </li>
          <li className="nav-item">
            <Link to="product"> 
             <a className="nav-link">Lihat Product</a>
            </Link>
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
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>INI ADALAH HALAMAN PRODUCT</h2>
      {/* <div class="container"> */}
      <li>
        <Link to={`${url}/Elektronik, Murah Meriah Bosss`}>
        {/* <button type="button" className="btn btn-primary" > elektronik  </button> */}
        {/* Jancuocok */}
        ini test 
         </Link>
      {/* </div> */}
      </li>

      <button type="button" className="btn btn-danger" href={`${url}/makanan`}> Makanan</button>
      <button type="button" className="btn btn-info" href={`${url}/fasion`}> Fasion</button>

      <Switch>
        <Route exact path={path}>
            <h3> Please Pilih Katagori.</h3>
        </Route>

        <Router exact path={`${path}/:produkId`}>
          <Produk />
        </Router>

      </Switch>
    </div>
  );
}

function Produk(){
  let { produkId } = useParams();
  return(
    <div>
      <h1>
        {produkId}
      </h1>
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

