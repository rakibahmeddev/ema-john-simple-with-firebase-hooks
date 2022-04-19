import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const haleNameBlur = (event) => {
    setName(event.target.value);
  };
  const haleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleShipping = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">
              Your Name <span>*</span>
            </label>
            <input
              onBlur={haleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">
              Email <span>*</span>
            </label>
            <input
              onBlur={haleEmailBlur}
              type="text"
              name="Email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Address">
              Address <span>*</span>
            </label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="Address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Phone">
              Phone Number <span>*</span>
            </label>
            <input
              onBlur={handlePhoneNumber}
              type="number"
              name="Phone"
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
              onClick={handleShipping}
              className="form-submit"
              type="button"
              value="Add Shipping"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
