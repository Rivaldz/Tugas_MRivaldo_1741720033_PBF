import firebase from "firebase";

const logout = () => {
   firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log("berhasil keluar")
    }).catch(function(error) {
  // An error happened.
    console.log("gagal keluar")
    });

}

export default logout;