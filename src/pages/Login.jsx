import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center w-100">
      <div className="form-container p-5 rounded rounded bg-white d-flex w-100 justify-content-center align-items-center vh-100">
        <form className="w-50">
          <h3 className="text-center ">Sign In</h3>
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
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn bg-black text-white">Sign In</button>
          </div>
          <p className="text-end mt-2">
            Forgot{" "}
            <a href="" className="footerTextColorGray">
              Password?
            </a>
            <Link to="/signup" className="ms-2 footerTextColorGray">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
