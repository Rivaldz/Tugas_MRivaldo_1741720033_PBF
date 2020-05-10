import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import firebase from "firebase";
import firebaseConfig from "../firebase/config";

// import Post from './Post';

class Register extends Component{
     constructor(props){
        super(props);
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        // firebase.initializeApp(firebaseConfig);

        this.state = {
            listArtikel: []
        }
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
            .ref('/')
            .set(this.state);
    }

    // componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
    //     this.ambilDataDariServerAPI()
    // }

     componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }


    handleTambahArtikel = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertArtikel = {...this.state.insertArtikel};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = (event) => {   
       let username = this.refs.username.value; 
       let email = this.refs.email.value; 
       let alamat= this.refs.alamat.value; 
       let no = this.refs.no.value;
       let pass = this.refs.pass.value;
       let uid = this.refs.uis.value;

       if (uid && username && email && alamat && no && pass) {
           const { listArtikel } = this.state;
           const indeksArtikel = listArtikel.findIndex(data => {
               return data.uid === uid;
           });
           listArtikel[indeksArtikel].title = title;
           listArtikel[indeksArtikel].body = body;
           this.setState({ listArtikel });
       } 
       else if ( title && body){
           const uid = new Date().getTime().toString();
           const { listArtikel } = this.state;
           listArtikel.push({uid, title, body});
           this.setState({listArtikel});
       }

       this.refs.judulArtikel.value = "";
       this.refs.isiArtikel.value = "";
       this.refs.uid.value = "";
    }



    // ambilDataDariServerAPI(){
    //     fetch('http://localhost:3001/profile')
    //         .then(response => response.json())
    //         .then(jsonHasilAmbilDariAPI => {
    //             this.setState({
    //                 listartikel: jsonHasilAmbilDariAPI
    //             })

    //         })
    // }

    // componentDidMount(){
    //     this.ambilDataDariServerAPI()
    // }

    // handleHapusArtikel = (data) => {
    //     fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})
    //         .then( res => {
    //             this.ambilDataDariServerAPI()
    //         })

    //     // console.log.this.ambilDataDariServerAPI()
    // }

    // deleteProduct(productId) {
    // const { products } = this.state;

    // const apiUrl = 'http://localhost/dev/tcxapp/reactapi/deleteProduct';
    // const formData = new FormData();
    // formData.append('productId', productId);

    // const options = {
    //   method: 'POST',
    //   body: formData
    // }

    // fetch(apiUrl, options)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         response: result,
    //         products: products.filter(product => product.id !== productId)
    //       });
    //     },
    //     (error) => {
    //       this.setState({ error });
    //     }
    //   )
    // }

    // handleTambahArtikel = (event) => {
    //     let formInsertArtikel = {...this.state.insertArtikel};
    //     let timestamp = new Date().getTime();
    //     formInsertArtikel['id'] = timestamp;
    //     formInsertArtikel[event.target.name] = event.target.value;
    //     this.setState({
    //         insertArtikel: formInsertArtikel
    //     });
    // }

    // handleTombolSimpan = () => {
    //     fetch('http://localhost:3001/profile',{
    //         method: 'post',
    //         headers:{
    //             'Accept' : 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(this.state.insertArtikel)
    //     })
    //         .then((Response) => {
    //             this.ambilDataDariServerAPI();
    //         });
    //       alert("Your file is being uploaded!")

    // }

    render(){
        return(
            <div className="post-artikel">
              <h2>Form Pendaftaran</h2>
              <div className="form pb-2 border-bottom">
              
                <div className="form-group row ">
                    <label htmlFor="username" className="col-sm-2 col-form-label ">Usename</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg " id="username" name="username" onChange={this.handleTambahArtikel} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control  form-control-lg" id="email" name="email" onChange={this.handleTambahArtikel} />
                    </div>
                </div>                

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg " id="alamat" name="alamat" onChange={this.handleTambahArtikel} />
                    </div>
                </div>                

                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">No Hp</label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control  form-control-lg" id="nohp" name="nohp" onChange={this.handleTambahArtikel} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control form-control-lg" name="password" id="password" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                </div>
                
                <Link to="/login">
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right" onClick={this.handleTombolSimpan}>Daftar
                </button>
                </Link>

              </div>
            </div>
        )
    }

}

export default Register;
