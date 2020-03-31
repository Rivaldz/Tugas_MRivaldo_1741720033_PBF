import React, {Component} from "react";
import Post from './Post';

import './BlogPost.css';

class BlogPost extends Component {
    state = {
        listArtkel: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtkel: jsonHasilAmbilDariAPI
                })
            })
    };
    render(){
        return(
            <div className="post-artikel">
               <h2>Daftar Artikel</h2>
               {
                   this.state.listArtkel.map(artikel => {
                       return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                   })
               }
            </div>
        )
    }
}

export default BlogPost;