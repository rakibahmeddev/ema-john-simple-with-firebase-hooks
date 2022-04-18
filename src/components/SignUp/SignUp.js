import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input type="password" name="Confirm Password" id="" required />
          </div>
          <div className="input-group">
            <input className="form-submit" type="button" value="Sign Up" />
          </div>
        </form>
        <div className="signup-in-login">
          <p className="login-body">
            Already have an account?{" "}
            <Link to="/login" className="new-account">
              Login
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

export default SignUp;
