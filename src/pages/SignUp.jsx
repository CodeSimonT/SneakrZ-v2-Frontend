import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/feature/authSlice";
const initialState = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  confirmPassword: "",
};

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password, firstname, lastname, confirmPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log(`incorrect password`);
      return;
    }
    if (email && password && firstname && lastname && confirmPassword) {
      dispatch(register({ formData, navigate }));
      console.log("form complete");
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center w-100">
      <div className="form-container p-5 rounded roounded bg-white w-100 d-flex justify-content-center align-items-center vh-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              value={firstname}
              name="firstname"
              placeholder="Enter First Name"
              className="form-control remove-outline"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              value={lastname}
              name="lastname"
              placeholder="Enter Last Name"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              placeholder="Enter Password"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="d-grid">
            <button className="btn bg-black text-white">Sign Up</button>
          </div>
          <p className="text-end mt-2">
            Already Registered
            <Link to="/Login" className="ms-2 footerTextColorGray">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
