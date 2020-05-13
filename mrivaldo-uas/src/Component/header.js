import Profile from './Profil.js';
import React from 'react';
import './header.css';
import {
  BrowserRouter as Router, 
  Switch,
  Link,
  Route 
  } from "react-router-dom";

  import firebase from "firebase";

const logout = () => {
   firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log("berhasil keluar")
    }).catch(function(error) {
  // An error happened.
    console.log("gagal logiut")
    });

}

const Header = () => {

  const handleLogout = e => {
    e.preventDefault();
   firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log("berhasil keluar")
    }).catch(function(error) {
  // An error happened.
    console.log("gagal logiut")
    });
  }

    return(    
    <div className="App">
      <nav class="navbar fixed-top  navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark"> 
         <a class="navbar-brand" href="#">NEWLest Software House</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">

      <Link to="/home">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      </Link>

      <Link to="/news"> 
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      </Link>

      <Link to="/profile">
      <li class="nav-item dropdown">
        <a class="nav-link " href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Profile 
        </a>
      </li>
      </Link>

      <Link to="/login">
      <li class="nav-item">
        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Login 
        </a>
      </li>
      </Link>

    </ul>
    <form  class="form-inline my-2 my-lg-0" onSubmit = {e => handleLogout(e)}>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
    </form>
  </div>
</nav>
</div>
    );
}

export default Header;