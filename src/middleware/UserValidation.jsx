import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserValidation = () => {
  useEffect(() => {
    if (true) {
      // Add the 'modal-open' class to the body when the modal is shown
      document.body.classList.add("modal-open");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);
  return (
    <>
      {/* The Bootstrap Modal */}
      <div
        className="modal show "
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Add your modal content here */}
            <div className="modal-header">
              <h5 className="modal-title">Hello Welcome</h5>
            </div>
            <div className="modal-body">
              <p>
                Thank you for using our service. To proceed further, you need to
                have an account. If you already have an account, please log in.
                Otherwise, you can register for a new account.
              </p>
            </div>
            <div className="modal-footer">
              {/* login */}
              <Link type="button" className="btn colorGrayBack" to={"/Login"}>
                Login
              </Link>
              {/* register */}
              <Link
                type="button"
                className="btn colorGrayBack"
                to={"/Signup"}
                // onClick={toggleModal}
              >
                Register
              </Link>
              {/* Add other buttons if needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
      {/* End of Bootstrap Modal */}
    </>
  );
};

export default UserValidation;
