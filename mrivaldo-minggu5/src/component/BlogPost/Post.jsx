import React from "react";

const Post = (props) => {
    return (
           <div className="mahasiswa">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt=" Gambar tumbnail artiker"/>
                </div>     
                <div className="konten-artikel">
                    <p className="isi-artikel"> {props.nim}</p>
                    <p className="isi-artikel"> {props.nama}</p>
                    <p className="isi-artikel">  {props.alamat}</p>
                    <p className="isi-artikel"> {props.hp}</p>
                    <p className="isi-artikel"> {props.angkatan}</p>
                    <p className="isi-artikel"> {props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
                </div>
              </div>
    )
}

export default Post;