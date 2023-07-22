import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/feature/authSlice.js";
import { arrowLeft, Fb, Google } from "../assets/icons/icons.js";
import { LoginImage } from "../assets/images/index.js";
const initialState = {
  email: "",
  password: "",
};

const Loginn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [text, setText] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formData, navigate }));
    }
    console.log(`this is the log ${formData}`);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div>
      <section className="p-0 py-2 p-md-5 text-white urbanist">
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex flex-column flex-lg-row backgroundColor containerWidth">
            {/* <!-- left content --> */}
            <div className="px-2 my-2 mt-sm-5 mb-lg-5 px-sm-5 webView mobileV signCBorderR hideBorder">
              {/* <!-- link to home page --> */}
              <div className="w-100 d-flex d-lg-none justify-content-end">
                <div className="d-flex align-items-center pointer">
                  <div className="d-flex align-items-center">
                    <img src="" alt="" className="signIconS" />
                  </div>
                  <a href="" className="text-white-50">
                    Go back
                  </a>
                </div>
              </div>
              {/* <!-- title --> */}
              <h1 className="fontBold text-black urbanistBold mb-4">
                Level up with SneakrZ.
              </h1>
              {/* <!-- img --> */}
              <div className="d-flex justify-content-center align-items-center py-4">
                <img
                  src={LoginImage}
                  alt=""
                  className="signImgSO signImgSizeR"
                />
              </div>
              {/* <!-- for sign up --> */}
              <div className="d-flex justify-content-center py-0 py-sm-4">
                <p className="text-black">Dont have an account?</p>
                <Link to={"/Signup"} className="textBorder">
                  Sign Up
                </Link>
              </div>
            </div>
            {/* <!-- rigth content --> */}
            <div className="px-2 my-2 mb-sm-5 mt-lg-5 px-sm-5 webView mobileV">
              {/* <!-- link to home page --> */}
              <div className="w-100 d-none d-lg-flex justify-content-end">
                <div className="d-flex align-items-center loginConHover pointer">
                  <div className="d-flex align-items-center">
                    <img src={arrowLeft} alt="" className="signIconS" />
                  </div>
                  <Link className="colorGray loginHover">Go back</Link>
                </div>
              </div>
              {/* <!-- google fb login --> */}
              <div className="w-100 py-3">
                {/* <!-- first content --> */}
                <div className="d-flex align-items-center loginConHover justify-content-center signUpB py-2 w-100 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={Google} alt="" className="signIconsS2" />
                  </div>
                  <Link href="" className="colorGray loginHover">
                    Sign in with Google
                  </Link>
                </div>
                {/* <!-- second content --> */}
                <div className="d-flex align-items-center loginConHover justify-content-center signUpB py-2 w-100">
                  <div className="d-flex align-items-center">
                    <img src={Fb} alt="" className="signIconsS2" />
                  </div>
                  <a href="" className="colorGray loginHover">
                    Sign in with Facebook
                  </a>
                </div>
              </div>
              {/* <!-- or separator --> */}
              <div className="w-100 d-flex justify-content-center my-0 my-sm-2 my-lg-4">
                <h6 className="m-0 colorGray">Or</h6>
              </div>
              {/* <!-- form --> */}
              <div className="w-100 colorGray">
                <form onSubmit={handleSubmit}>
                  {/* <!-- email --> */}
                  <div className="mb-3">
                    <p className="mb-1">Email</p>
                    <input
                      type="email"
                      id="emailInput"
                      value={email}
                      name="email"
                      onChange={onInputChange}
                      placeholder="Enter Email"
                      className="colorGray inputDesign w-100 px-3 py-2 rounded-2"
                    />
                  </div>
                  {/* <!-- password --> */}
                  <div className="mb-1 colorGray">
                    <p className="mb-1">
                      Password
                      <span className="text-white-50">min 8. char</span>
                    </p>
                    <input
                      type={text ? "password" : "text"}
                      id="passwordInput"
                      value={password}
                      name="password"
                      placeholder="Enter Password"
                      onChange={onInputChange}
                      className="colorGray inputDesign w-100 px-3 py-2 rounded-2"
                    />
                  </div>
                  <div className="d-flex">
                    <p
                      className="ps-1 mb-0  showText pointer"
                      onClick={() => setText((prev) => !prev)}
                    >
                      show password
                    </p>
                  </div>
                  {/* <!-- button --> */}
                  <button
                    type="submit"
                    className="w-100 py-3 text-white loginConHover rounded-2 mt-4 buttonBackGround border-0"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loginn;
