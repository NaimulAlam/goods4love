import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div id="SignIn" className="container-fluid">
      <h2 className="text-center py-3">This Login will be in singe page</h2>
      <form className="loginForm my-4 px-3 py-2">
        <div className="card-header text-center">
          <h2>Login</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="container px-2 py-lg-3">
          <div className="row gx-2">
            <div className="col ">
              <a className="btn btn-outline-primary createAccountText" href="#SignUp">
                create an account
              </a>
            </div>
            <div className="col text-end">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
