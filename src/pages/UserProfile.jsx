import React, { useState } from "react";
import { imageProfile } from "../assets/icons/icons";
import { Billing, PersonalInfo, Gifts, Orders } from "./index";
import { profileLinks } from "../constants";

const UserProfile = () => {
  const [selectedLink, setSelectedLink] = useState("Profile information"); // Set the first link as the initial selected link

  // Helper function to handle link click and update selectedLink state
  const handleLinkClick = (linkTitle) => {
    setSelectedLink(linkTitle);
  };

  // Determine which component to render based on the selected link
  let componentToRender;
  switch (selectedLink) {
    case "Profile information":
      componentToRender = <PersonalInfo />;
      break;
    case "Gift Cards":
      componentToRender = <Gifts />;
      break;
    case "Order History":
      componentToRender = <Orders />;
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
            <button className="userButtonStyle">Sign Out</button>
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
                <h1 className="urbanistBold">simon turiano</h1>
                {/* user email */}
                <p className="colorGray">simonturiano@gmail.com</p>
              </div>
              {/* navigation */}
              <div className="mt-4">
                {profileLinks.map((item) => (
                  <div key={item.id} className="mb-3">
                    <div
                      className={` profileLink urbanistBold  ${
                        selectedLink === item.title
                          ? "activeButton"
                          : "colorGray"
                      } `}
                      onClick={() => handleLinkClick(item.title)}
                    >
                      <h4 className="pointer">{item.title}</h4>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
