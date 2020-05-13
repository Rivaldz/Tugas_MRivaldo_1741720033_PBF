import './header.css';
import React, { Component } from 'react';
import ProfileBind from './profilBind';
import firebase from "firebase";
import firebaseConfig from "../firebase/config";

class Profile extends Component {

 constructor(props){
        super(props);
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        // firebase.initializeApp(firebaseConfig);

        this.state = {
            listProfil: []
        }
    }

    ambilDataDariServerAPI = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
            .ref('/')
            .set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }

    // handleHapusArtikel = (idArtikel) => {        // fungsi yang meng-handle button action hapus data
    //     const {listArtikel} = this.state;
    //     const newState = listArtikel.filter(data => {
    //         return data.uid !== idArtikel;
    //     });
    //     this.setState({listArtikel: newState});
    // }

    // handleTambahArtikel = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
    //     let formInsertArtikel = {...this.state.insertArtikel};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
    //     let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
    //     formInsertArtikel['id'] = timestamp;
    //     formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
    //     this.setState({
    //         insertArtikel: formInsertArtikel
    //     });
    // }

    // handleTombolSimpan = (event) => {   
    //    let title = this.refs.judulArtikel.value; 
    //    let body = this.refs.isiArtikel.value; 
    //    let uid = this.refs.uid.value; 

    //    if (uid && title && body) {
    //        const { listArtikel } = this.state;
    //        const indeksArtikel = listArtikel.findIndex(data => {
    //            return data.uid === uid;
    //        });
    //        listArtikel[indeksArtikel].title = title;
    //        listArtikel[indeksArtikel].body = body;
    //        this.setState({ listArtikel });
    //    } 
    //    else if ( title && body){
    //        const uid = new Date().getTime().toString();
    //        const { listArtikel } = this.state;
    //        listArtikel.push({uid, title, body});
    //        this.setState({listArtikel});
    //    }

    //    this.refs.judulArtikel.value = "";
    //    this.refs.isiArtikel.value = "";
    //    this.refs.uid.value = "";
    // }

    
  render(){
   return(
<div class="container">
  <h2>Profile Member</h2>
  {/* <ProfileBind/>  */}
  <div class="card kartu">
    <div class="row">
      <div class="col-md4">
        <div class="foto">
           <img src="https://picsum.photos/200/300" alt="" width="200" height="300"/>
        </div> 
      </div>
      <div class="col-md-8 kertas-biodata">

      <div class="card">
      {this.state.listProfil.map(artikel => {
          return(
          <table class="table">
            <tbody>
              <tr>
                <th scope="row"></th>
                <th>Username</th>
                <td>:</td>
                <td>{artikel.body}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Email</th>
                <td>:</td>
                <td>{}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>Alamat</th>
                <td>:</td>
                <td>{}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th>No Hp</th>
                <td>:</td>
                <td>{}</td>
              </tr>
              </tbody>
          </table>

          )

      })}
        </div>
      </div>
    </div>
   </div>
  
 </div>

    );
  }
}


export default Profile;


