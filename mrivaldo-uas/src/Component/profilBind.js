import React from "react";

const ProfileBind = (props) =>{
    return(
  <div class="card kartu">
    <div class="row">
      <div class="col-md4">
        <div class="foto">
           <img src="https://picsum.photos/200/300" alt="" width="200" height="300"/>
        </div> 
      </div>
      <div class="col-md-8 kertas-biodata">

      <div class="card">

          <table class="table">
            <tbody>
              <tr>
                <th scope="row"></th>
                <th>Username</th>
                <td>{props.username}</td>
                <td>isi</td>
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
        )
}

export default ProfileBind;