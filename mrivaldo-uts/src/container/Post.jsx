import React from "react";

const Post = (props) =>{
    return(
            <div className="post-artikel">
                <div className="artikel">
                    <div className="gambar-artikel">
                        <img src=" http://placeimg.com/120/120/any" alt=" Gambar Thumbnail Artikel" />
                    </div>

                    <div className="konten-artikel">
                        <div className="judul-artikel">{props.judul}</div>
                         <p className="isi-artikel">{props.isi}</p>
                    </div>
                </div>
            </div>
        )
}

export default Post;