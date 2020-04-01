import './header.css';
import React, { Component } from 'react';
import ProfileBind from './profilBind';

class Profile extends Component {
    state ={
        listartikel: [],
        insertArtikel:{
            id: 1,
            username: "",
            email: "",
            alamat:"",
            nohp: 1,
            password: ""

        }
    }

    ambilDataDariServerAPI(){
        fetch('http://localhost:3001/profile')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listartikel: jsonHasilAmbilDariAPI
                })

            })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})
            .then( res => {
                this.ambilDataDariServerAPI()
            })

        // console.log.this.ambilDataDariServerAPI()
    }

    deleteProduct(productId) {
    const { products } = this.state;

    const apiUrl = 'http://localhost/dev/tcxapp/reactapi/deleteProduct';
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            products: products.filter(product => product.id !== productId)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/profile',{
            method: 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
          alert("Your file is being uploaded!")

    }

  render(){
    return(
<div class="container">
  <h2>Profile Member</h2>
  
  {/* <div class="card kartu">
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
                <td>:</td>
                {
                 this.sate.listartikel(artikel => {
                   return<td>{artikel.username}</td> 

                 })

                }
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
   </div> */}
  
 </div>

    );
  }
}


export default Profile;


