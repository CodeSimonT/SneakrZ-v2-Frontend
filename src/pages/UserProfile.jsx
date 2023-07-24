import React, { useEffect, useState } from "react";
import { imageProfile } from "../assets/icons/icons";
import { ToReceived, PersonalInfo, Orders } from "./index";
import { profileLinks } from "../constants";
import { getUser } from "../redux/cart/userData.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetData } from "../redux/cart/userData.js";
import { bell } from "../assets/icons/icons";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((item) => item.data);
  const toReceivedNotify = localStorage.getItem("toReceived");
  const ReceivedOrderNotify = localStorage.getItem("ReceivedItem");
  const [selectedLink, setSelectedLink] = useState("Profile information"); // Set the first link as the initial selected link
  const [logOutConfirm, setlogOutConfirm] = useState(true);
  console.log(info);
  // Helper function to handle link click and update selectedLink state
  const handleLinkClick = (linkTitle) => {
    setSelectedLink(linkTitle);
  };

  const toReceivedToggle = () => {
    localStorage.removeItem("toReceived");
  };
  const ReceivedOrderToggle = () => {
    localStorage.removeItem("ReceivedItem");
  };

  // signout
  const signuot = () => {
    dispatch(resetData());
    localStorage.clear();
    navigate("/");
  };
  // Determine which component to render based on the selected link
  let componentToRender;
  switch (selectedLink) {
    case "Profile information":
      componentToRender = <PersonalInfo />;
      break;
    case "Order History":
      componentToRender = <Orders />;
      break;
    case "To Received":
      componentToRender = <ToReceived />;
      break;
    default:
      componentToRender = <PersonalInfo />;
  }
  return (
    <>
      <section className="py-5 px-5 urbanist">
        <div className="container-fluid">
          {/* heading */}
          <div className="d-flex justify-content-between userHeading pb-4">
            <h2 className="urbanistBold">SneakrZ Account</h2>
            <button
              className="userButtonStyle"
              onClick={() => setlogOutConfirm(false)}
            >
              Sign Out
            </button>
          </div>
          {/* body */}
          <div className="row mt-5">
            {/* left content */}
            <div className="col-4">
              {/* image container */}
              <div className="d-flex flex-column align-items-start">
                <div className="profileContainer">
                  <img src={imageProfile} alt="" className="profileImageS" />
                </div>
                {/* userName */}
                <h1 className="urbanistBold">{info?.username} </h1>
                {/* user email */}
                <p className="colorGray">{info?.email} </p>
              </div>
              {/* navigation */}
              <div className="mt-4">
                {profileLinks.map((item, index) => (
                  <div key={item.id} className="mb-3">
                    <div
                      className={` profileLink urbanistBold d-flex  ${
                        selectedLink === item.title
                          ? "activeButton"
                          : "colorGray"
                      } `}
                      onClick={() => {
                        if (index === 1) {
                          // Add specific behavior for index 2 here
                          handleLinkClick(item.title);
                          toReceivedToggle();
                        } else if (index === 2) {
                          handleLinkClick(item.title);
                          ReceivedOrderToggle();
                        } else {
                          // Use the existing handleLinkClick for other indexes
                          handleLinkClick(item.title);
                        }
                      }}
                    >
                      <h4 className="pointer me-3">{item.title}</h4>
                      {toReceivedNotify && index === 1 && (
                        <div className="notifyStyle">
                          <img
                            src={index === 1 ? bell : ""}
                            alt=""
                            className="w-75"
                          />
                        </div>
                      )}
                      {ReceivedOrderNotify && index === 2 && (
                        <div className="notifyStyle">
                          <img
                            src={index === 2 ? bell : ""}
                            alt=""
                            className="w-75"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* right container */}
            <div className="col-8">
              {/* Render the selected component here */}
              {componentToRender}
            </div>
            {/* logout confirmation (Modal)*/}
            <div
              className={`modal ${!logOutConfirm ? "show" : "hide"}`} // Step 5: Show the modal based on the !logOutConfirm state
              tabIndex="-1"
              role="dialog"
              style={{ display: !logOutConfirm ? "block" : "none" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <h3 className="modal-title mb-2"> {info?.username} </h3>
                    {/* intro */}
                    <div>
                      <p>Are you sure you want to log Out?</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn colorGrayBack me-3"
                        onClick={signuot}
                      >
                        Logout
                      </button>
                      <button
                        className="btn colorGrayBack"
                        onClick={() => setlogOutConfirm(true)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!logOutConfirm && <div className="modal-backdrop fade show"></div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
