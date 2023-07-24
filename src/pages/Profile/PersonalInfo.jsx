import { useState, useEffect } from "react";
import {
  calendar,
  person50,
  globe,
  message,
  pinLoc,
} from "../../assets/icons/icons.js";
import { postingAddress } from "../../redux/feature/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const initialState = {
  houseNumber: "",
  city: "",
  address: "",
  country: "",
};
import { getUser } from "../../redux/cart/userData.js";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { houseNumber, city, address, country } = formData;
  const [hasAddress, setHasAddress] = useState("");
  const [token, setToken] = useState("");
  const getUserAddress = localStorage.getItem("address");
  const getUserToken = localStorage.getItem("auth");
  const { info, loading } = useSelector((item) => item.data);
  console.log(token);
  useEffect(() => {
    if (getUserToken) {
      // const { hasAddress } = JSON.parse(getUserAddress);
      const token = JSON.parse(getUserToken);
      dispatch(getUser({ token: token, navigate }));
      setToken(token);
      // setHasAddress(hasAddress);
    }
  }, [getUserToken]);
  // const getUserData = () => {
  //   const token = JSON.parse(getUserToken);
  //   dispatch(getUser({ token: token, navigate }));
  //   setToken(token);
  // };

  useEffect(() => {
    if (!getUserAddress) {
      // Add the 'modal-open' class to the body when the modal is shown
      document.body.classList.add("modal-open");
    }
    // Clean up the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [getUserAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (houseNumber && city && address && country) {
      dispatch(postingAddress({ token, formData, navigate }));
      // getUserData();
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* heading */}
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="mb-3">Personal Information</h1>
        </div>
        <p>
          Manage your personal infomation, including phone and email address
          where you can be contacted
        </p>
      </div>
      {/* body content */}
      <div className="row ">
        {/* name */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Name</h4>
              <div className="iconsSize">
                <img src={person50} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info?.username} </p>
          </div>
        </div>
        {/* contact */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1 mt-4 mt-md-0">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Contactable at</h4>
              <div className="iconsSize">
                <img src={message} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info?.email} </p>
          </div>
        </div>
        {/* House No. */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">House No.</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info?.houseNumber} </p>
          </div>
        </div>
        {/* City */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">City</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info?.city} </p>
          </div>
        </div>
        {/* Country */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Country</h4>
              <div className="iconsSize">
                <img src={globe} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info?.country} </p>
          </div>
        </div>
        {/* address */}
        <div className="col-12 col-md-6">
          <div className="useDataCon p-4 m-1 mt-4">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="urbanistBold">Address</h4>
              <div className="iconsSize">
                <img src={pinLoc} alt="" className="w-100" />
              </div>
            </div>
            <p className="mb-0 colorGray">{info.address} </p>
          </div>
        </div>
        {/* end container */}
      </div>
      {/* address form  (Modal)*/}
      <div
        className={`modal ${!getUserAddress ? "show" : "hide"}`} // Step 5: Show the modal based on the !getUserAddress state
        tabIndex="-1"
        role="dialog"
        style={{ display: !getUserAddress ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Welcome {info?.username} </h5>
            </div>
            <div className="modal-body">
              {/* intro */}
              <div>
                <p>
                  Before we proceed, we kindly request you to provide your
                  address. This will help us personalize our services for you.
                  Please enter your address details below to continue:
                </p>
              </div>
              {/* Your Bootstrap form inside the modal */}
              <h5 className="mb-2">Enter you Address</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="houseNumber">House Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="houseNumber"
                    name="houseNumber"
                    value={houseNumber}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={city}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={address}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={country}
                    onChange={onInputChange}
                  />
                </div>

                <div className="d-flex justify-content-end mt-3">
                  <button type="submit" className="btn colorGrayBack">
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {!getUserAddress && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default PersonalInfo;
