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
    <div className="py-4 urbanist">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-7 ">
            <form className="w-100" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4 urbanistBold">Sign In</h2>
              {/* email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  placeholder="Enter Email"
                  className="form-control"
                />
                <label for="floatingInput">Email</label>
              </div>
              {/* password */}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  onChange={onInputChange}
                />
                <label for="floatingInput">Password</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn bg-black text-white">
                  Sign In
                </button>
              </div>
              <p className="text-end mt-2">
                Forgot{" "}
                <a href="" className="text-black">
                  Password?
                </a>
                <Link to="/signup" className="ms-2 footerTextColorGray">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
