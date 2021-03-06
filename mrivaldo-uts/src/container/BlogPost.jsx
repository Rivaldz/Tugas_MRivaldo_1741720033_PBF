import React, {Component} from "react";
import './BlogPost.css';
import Post from './Post';

class BlogPost extends Component{

    state ={
        listartikel: [],
        insertArtikel:{
            userId: 1,
            id: 1,
            title: "",
            body: ""

        }
    }

    ambilDataDariServerAPI(){
        fetch('http://localhost:3001/posts')
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
        fetch('http://localhost:3001/posts',{
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
    }

    render(){
        return(
            <div className="post-artikel">
              <div className="form pb-2 border-bottom">
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="body" className="col-sm-2 col-form-label"> isi </label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
              
              </div>
              <h2>Daftar Artikel</h2>
              {
                  this.state.listartikel.map(artikel => {
                      return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                  })

              }
            </div>
        )
    }
}

export default BlogPost;