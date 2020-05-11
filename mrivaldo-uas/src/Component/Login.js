
import Register from './Register'
import React, {useState, useContext} from 'react';
// import firebase from "firebase";
import firebaseConfig from "../firebase/config";
import * as firebase from "firebase";
import {AuthContext} from "../App";
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
  if(!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) console.log("login sukses");
      })
      .catch(e => {
        setErrors(e.message);
      });
    // console.log(Auth);
    // Auth.setLoggedIn(true);
  };

   return(
    <div className="auth-page">
        {/* <AuthButton/> */}
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">
                  Need an account?
                </Link>
              </p>

              <form onSubmit={e => handleForm(e)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      className="form-control form-control-lg"
                      type="email"
                      name = "email"
                      placeholder="Email"
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      onChange={e => setPassword(e.target.value)}
                      value = {password}
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name = "password"
                    />
                  </fieldset>
                </fieldset>
                <button type="submit">
                  Login
                </button>
                <span>{error}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }

export default Login;