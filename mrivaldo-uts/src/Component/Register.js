import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
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
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                    //   value={this.props.username}
                    //   onChange={this.changeUsername} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                    //   value={this.props.email}
                    //   onChange={this.changeEmail} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Alamat"
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="No Hp"
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />

                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                    //   value={this.props.password}
                    //   onChange={this.changePassword} 
                      />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
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

export default Register;
