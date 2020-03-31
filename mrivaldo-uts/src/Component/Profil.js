import './header.css';
import React from 'react';

const Profile = () => {
    return(
<div class="container">
  <h2>Profile Member</h2>
  <div class="card kartu">
    <div class="row">
      <div class="col-md4">
        <div class="foto">
           {/* <img src={(require("../src/foto.jpg"))} alt="" width="300" height="auto"/> */}
        </div>   
      </div>
      <div class="col-md-8 kertas-biodata">
      <div class="card">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row"></th>
                <th>Username</th>
                <td>:</td>
                <td>Muh Rivaldo Setyo Purnomo</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Email</th>
                <td>:</td>
                <td>email user</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Alamat</th>
                <td>:</td>
                <td>Alamat rumah</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>No Hp</th>
                <td>:</td>
                <td>0874977</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  
 </div>

    );
}

export default Profile;


