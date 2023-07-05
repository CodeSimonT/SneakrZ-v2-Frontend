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
  const [toggle, setToggle] = useState(false);
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
  const toggler = () => {
    setToggle;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="py-4 urbanist">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-7 ">
            <form className="w-100" onSubmit={handleSubmit}>
              <h1 className="text-center mb-4 urbanistBold">Sign Up</h1>
              {/* first name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  value={firstname}
                  name="firstname"
                  placeholder="Enter First Name"
                  className="form-control removeOut"
                  onChange={onInputChange}
                />
                <label for="floatingInput">First Name</label>
              </div>
              {/* Last name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  value={lastname}
                  name="lastname"
                  placeholder="Enter Last Name"
                  className="form-control"
                  onChange={onInputChange}
                />
                <label for="floatingInput">Last Name</label>
              </div>
              {/* Email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                  onChange={onInputChange}
                />
                <label for="floatingInput">Email</label>
              </div>
              {/* Password */}
              <div className="form-floating mb-3">
                <input
                  type={!toggle ? "password" : "text"}
                  value={password}
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  onChange={onInputChange}
                />
                <label for="floatingInput">Password</label>
              </div>
              {/* confirm */}
              <div className="form-floating mb-2">
                <input
                  type={!toggle ? "password" : "text"}
                  value={confirmPassword}
                  name="confirmPassword"
                  placeholder="Enter Password"
                  className="form-control"
                  onChange={onInputChange}
                />
                <label for="floatingInput">Confirm password</label>
              </div>

              <button
                onClick={() => setToggle((prev) => !prev)}
                className="mb-3 buttonS "
              >
                Show password
              </button>
              {/*  */}
              <div className="d-grid">
                <button className="btn bg-black text-white">Sign Up</button>
              </div>
              <p className="text-end mt-2">
                Already Registered ?
                <Link to="/Login" className="ms-2 footerTextColorGray">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
