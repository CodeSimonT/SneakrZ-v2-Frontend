import React from "react";
import { Link } from "react-router-dom";
import { styling } from "../../style/style";
const TokenValidation = () => {
  return (
    <>
      <div className={`vh-100 flex-column ${styling.flexCenter}`}>
        <h1>Make an account first or Login</h1>
        <div className="w-25 d-flex justify-content-between mt-5">
          <div>
            <h5>
              <Link to={"/SignUp"} className="buttonStyle">
                Signup
              </Link>
            </h5>
          </div>
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
