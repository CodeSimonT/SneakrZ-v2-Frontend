import React from "react";
import { Link } from "react-router-dom";
import { styling } from "../../style/style";

const TokenValidation = () => {
  return (
    <>
      <div className={`vh-100 flex-column ${styling.flexCenter}`}>
        <h1>Login your Account</h1>
        <div className="w-25 d-flex justify-content-center mt-5">
          <div>
            <h5>
              <Link to={"/Login"} className="buttonStyle">
                Login
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenValidation;
