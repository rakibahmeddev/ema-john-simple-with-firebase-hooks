import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="Email">
              Email <span>*</span>
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="Email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">
              Password <span>*</span>
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="Password"
              id=""
              required
            />
          </div>
          {/* error message  */}
          <div>
            <p style={{ color: "red" }}>{error?.message}</p>

            {loading && <p>Loading...</p>}
          </div>
          <div className="input-group">
            <input
              onClick={handleUserSignIn}
              className="form-submit"
              type="button"
              value="Login"
            />
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
