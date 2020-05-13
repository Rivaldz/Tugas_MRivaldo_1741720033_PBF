import React, {Component, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import firebase from "firebase";
import firebaseConfig from "../firebase/config";
import {AuthContext} from "../App";

// import Post from './Post';

class Register extends Component{
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = setState("");
    // const [error, setError] = setState("");

    // const Auth = useContext(AuthContext);
    // const handleForm = e => {
    //     e.prevenDefault();
    //     firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(res => {
    //         if(res.user) console.log("berhasil register");
    //     })
    //     .catch(e => {
    //         console.log("gagal register");
    //     });
    //     // console.log(Auth);
    //     // Auth.setLoggedIn(true);
    // };


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

      componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()
      }

    simpanDataKeServerAPI = () => {
        firebase.database()
            .ref('/')
            .set(this.state);
    }

     componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }


    handleTambahArtikel = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertProfil = {...this.state.insertProfil};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertProfil['id'] = timestamp;
        formInsertProfil[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertProfil: formInsertProfil 
        });
    }

    handleTombolSimpan = (event) => {   
       let username = this.refs.username.value; 
       let email = this.refs.email.value; 
       let alamat= this.refs.alamat.value; 
       let no = this.refs.no.value;
       let pass = this.refs.pass.value;
       let uid = this.refs.uid.value;

       firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(res => {
            if(res.user) console.log("Berhasil sign");
        })
        .catch(e => {
            console.log("gagal signup")
        })

       if (uid && username && email && alamat && no && pass) {
           const { listProfil } = this.state;
           const indeksProfil = listProfil.findIndex(data => {
               return data.uid === uid;
           });
           listProfil[indeksProfil].username = username;
           listProfil[indeksProfil].email = email;
           listProfil[indeksProfil].alamat = alamat;
           listProfil[indeksProfil].no = no;
           listProfil[indeksProfil].pass= no;
           this.setState({ listProfil });
       } 
       else if ( username && email && alamat && no && pass){
           const uid = new Date().getTime().toString();
           const { listProfil } = this.state;
           listProfil.push({uid, username, email, alamat, no, pass});
           this.setState({listProfil});
       }

       window.alert("Pendaftaran berhasil silahkan login untuk melanjutkan");

       this.refs.username.value = "";
       this.refs.email.value = "";
       this.refs.alamat.value = "";
       this.refs.no.value = "";
       this.refs.pass.value = "";
       this.refs.uid.value = "";
    }


    render(){
        return(
            <div className="post-artikel">
              <h2>Form Pendaftaran</h2>
              <div className="form pb-2 border-bottom">
             <form >
                <div className="form-group row ">
                    <label htmlFor="username" className="col-sm-2 col-form-label ">Usename</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg " id="username" name="username" ref = "username" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input  type="email" className="form-control  form-control-lg" id="email" name="email" ref = "email" />
                    </div>
                </div>                

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg " id="alamat" name="alamat" ref = "alamat" />
                    </div>
                </div>                

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">No Hp</label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control  form-control-lg" id="nohp" name="nohp" ref = "no" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input  type="password" className="form-control form-control-lg" name="password" id="password" rows="3" ref="pass"/>
                        <input type= "hidden" name = "uid" ref = "uid"/>
                    </div>
                </div>
                
                <Link to="/login">
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right" onClick={this.handleTombolSimpan}>Daftar
                </button>
                </Link>
            </form>
              </div>
            </div>
        )
    }

}

export default Register;
