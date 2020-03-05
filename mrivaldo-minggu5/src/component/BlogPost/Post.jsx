import React from "react";

const Post = (props) => {
    return (
           <div className="mahasiswa">
                <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/tech" alt=" Gambar tumbnail artiker"/>
                </div>     
                <div className="konten-artikel">
                    <p className="isi-artikel"> NIM    : {props.nim}</p>
                    <p className="isi-artikel"> Nama   :{props.nama}</p>
                    <p className="isi-artikel"> Alamat :{props.alamat}</p>
                    <p className="isi-artikel"> HP :{props.hp}</p>
                    <p className="isi-artikel"> Angkatan :{props.angkatan}</p>
                    <p className="isi-artikel"> Status :{props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.key)}>Hapus</button>
                </div>
              </div>
    )
}

export default Post;