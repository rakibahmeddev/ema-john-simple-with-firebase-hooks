import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="Email">
              Email <span>*</span>
            </label>
            <input type="email" name="Email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="Password">
              Password <span>*</span>
            </label>
            <input type="password" name="Password" id="" required />
          </div>
          <div className="input-group">
            <input className="form-submit" type="button" value="Login" />
          </div>
        </form>
        <div className="signup-in-login">
          <p className="login-body">
            New to Ema John?{" "}
            <Link to="/signup" className="new-account">
              Create New Account
            </Link>
          </p>
        </div>
        <div className="login-divider">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <div className="login-with-google">
          <img src="https://img.icons8.com/color/452/google-logo.png" alt="" />
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
