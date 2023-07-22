import React from "react";
import {
  calendar,
  person50,
  globe,
  message,
  pinLoc,
} from "../../assets/icons/icons.js";

const PersonalInfo = () => {
  return (
    <>
      {/* heading */}
      <div>
        <h1 className="mb-3">Personal Information</h1>
        <p>
          Manage your personal infomation, including phone and email address
          where you can be contacted
        </p>
      </div>
      {/* body content */}
      <div className="row ">
        {/* name */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Name</h4>
              <div className="iconsSize">
                <img src={person50} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">Simon Turiano</p>
          </div>
        </div>
        {/* contact */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1 ">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Contactable at</h4>
              <div className="iconsSize">
                <img src={message} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">SimonTuriano@gmail.com</p>
          </div>
        </div>
        {/* House No. */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">House No.</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">3563</p>
          </div>
        </div>
        {/* City */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">City</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">Naga City</p>
          </div>
        </div>
        {/* Country */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1 my-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Country</h4>
              <div className="iconsSize">
                <img src={globe} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">Phillipines</p>
          </div>
        </div>
        {/* address */}
        <div className="col-6 ">
          <div className="useDataCon p-4 m-1 my-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Address</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">Konuha</p>
          </div>
        </div>
        {/* end container */}
      </div>
    </>
  );
};

export default PersonalInfo;
