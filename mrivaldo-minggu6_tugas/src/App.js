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
  useHistory,
  Redirect
} from "react-router-dom";

export default function NestingExample(){
  return(
    <Router>
      <div className="App">
      {/* <AuthButton/> */}

      <nav className=" navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link to="/">
            <a className="nav-link" >Rivaldo Shop</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/topics"> 
             <a className="nav-link">Lihat Product</a>
            </Link>
          </li>
          <li className="nav-item">
              <Link to="/about">
              <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to = "/profil">
              <a className="nav-link">Profil</a>
              </Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
              {/* <Topics /> */}
              <Home/>
          </Route>

          <Route exact path="/about">
              <About/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <PrivateRoute path = "/profil">
            <Profil/>
          </PrivateRoute>

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
      <AuthButton/>

      <h2>INI ADALAH HALAMAN profil</h2>
      {/* <button className="btn btn-info">Login</button> */}
    </div>
  );
}
function About(){
  return (
    <div>
      <h2>INI ADALAH HALAMAN about</h2>
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

function PublicPage() {
  return <h3> Public </h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>
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
      <button className="btn btn-info" onClick={login}>Log In</button>
    </div>
  );
}

