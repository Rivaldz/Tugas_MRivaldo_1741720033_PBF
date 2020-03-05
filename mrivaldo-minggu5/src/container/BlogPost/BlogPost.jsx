import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state ={
        listMahasiswa: [],
        insertMahasiswa:{
            NIM : 1,
            id : 1,
            nama: 1,
            alamat: "",
            hp: 1,
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI(){
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
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

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts',{
            method: 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(
            <div className="post-artikel">
              <div className="form pb-2 border-bottom">
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahArtikel} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-10">
                        <input className="form-control" name="nama" id="nama" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                 </div>
                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                    <div className="col-sm-10">
                        <input className="form-control" name="alamat" id="alamat" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                 </div>                
                 <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">No HP</label>
                    <div className="col-sm-10">
                        <input className="form-control" name="hp" id="hp" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                 </div>                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">angkatan</label>
                    <div className="col-sm-10">
                        <input className="form-control" name="angkatan" id="angkatan" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                 </div>                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <input className="form-control" name="status" id="status" rows="3" onChange={this.handleTambahArtikel}/>
                    </div>
                 </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
              
                 </div>
              <h2>Daftar Mahasiswa</h2>
              {
               this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} nim={mahasiswa.NIM} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusArtikel}/>  
                        })
              }
            </div>
        )
    }
}

export default BlogPost;