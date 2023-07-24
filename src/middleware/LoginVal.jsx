import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeError } from "../redux/feature/authSlice";

const LoginVal = (props) => {
  const dispatch = useDispatch();
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
  const dispatchAction = () => {
    dispatch(removeError());
  };
  return (
    <>
      {/* The Bootstrap Modal */}
      <div
        className="modal show "
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-dialog-centered text-black"
          role="document"
        >
          <div className="modal-content">
            {/* Add your modal content here */}
            <div className="modal-header">
              <h5 className="modal-title ">Opps</h5>
            </div>
            <div className="modal-body text-black">
              <p>{props.value.error}</p>
            </div>
            <div className="modal-footer">
              {/* Add other buttons if needed */}
              <button onClick={dispatchAction}>close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
      {/* End of Bootstrap Modal */}
    </>
  );
};

export default LoginVal;
