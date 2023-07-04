import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/feature/authSlice";
const initialState = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

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
    <div className="login template d-flex justify-content-center align-items-center w-100">
      <div className="form-container p-5 rounded rounded bg-white d-flex w-100 justify-content-center align-items-center vh-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <h3 className="text-center ">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              placeholder="Enter Email"
              className="form-control"
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
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn bg-black text-white">
              Sign In
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot{" "}
            <a href="" className="footerTextColorGray">
              Password?
            </a>
            <Link to="/signup" className="ms-2 footerTextColorGray">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
