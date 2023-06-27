import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup template d-flex justify-content-center align-items-center w-100">
      <div className="form-container p-5 rounded roounded bg-white w-100 d-flex justify-content-center align-items-center vh-100">
        <form className="w-50">
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control remove-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button className="btn bg-black text-white">Sign Up</button>
          </div>
          <p className="text-end mt-2">
            Already Registered
            <Link to="/" className="ms-2 footerTextColorGray">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
