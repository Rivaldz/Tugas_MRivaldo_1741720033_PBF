import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{
    state= {
    showProfile: [],
    insertArtikel:{
      id: 1,
      username: "",
      email: "",
      alamat: "",
      nohp: 1,
      password: ""
    }
  }

  ambilDataDariServerAPI(){
    fetch('http://localhost:3001/profile')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          showProfile: jsonHasilAmbilDariAPI
        })

      })
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
    fetch('http://localhost:3000/profile',{
      method: 'post',
      header:{
        'Accept' : 'application/json',
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringfy(this.state.insertArtikel)
    })
      .then((Response) => {
        this.ambildataDariServerAPI();
      });

  }

    render() {
      return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="login">
                  Have an account?
                </Link>
              </p>

              {/* <ListErrors errors={this.props.errors} /> */}

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      id="username"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"

                      onChange={this.handleTambahArtikel}
                    //   value={this.props.username}
                    //   onChange={this.changeUsername} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      id="email"
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"

                      onChange={this.handleTambahArtikel}
                    //   value={this.props.email}
                    //   onChange={this.changeEmail} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      id="alamat"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Alamat"

                      onChange={this.handleTambahArtikel}
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      id="nohp"
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="No Hp"

                      onChange={this.handleTambahArtikel}
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />

                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      id="password"
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleTambahArtikel}
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    onClick={this.handleTombolSimpan}
                    // disabled={this.props.inProgress}
                    >
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Register;
