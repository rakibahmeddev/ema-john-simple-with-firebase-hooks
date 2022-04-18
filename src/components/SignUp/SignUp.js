import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const haleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    // validation
    if (password !== confirmPassword) {
      setError("Your both password should be same.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 more characters.");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="Email">
              Email <span>*</span>
            </label>
            <input
              onBlur={haleEmailBlur}
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
          <div className="input-group">
            <label htmlFor="Confirm Password">
              Confirm Password <span>*</span>
            </label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="Confirm Password"
              id=""
              required
            />
          </div>

          {/* error massage  */}
          <div className="error-message">
            <p>{error}</p>
          </div>

          <div className="input-group">
            <input
              onClick={handleCreateUser}
              className="form-submit"
              type="button"
              value="Sign Up"
            />
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
