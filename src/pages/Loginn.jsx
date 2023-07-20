import React from "react";
import { styling } from "../../style/style.js";
import { LoginImage } from "../assets/images/index.js";
import { Link } from "react-router-dom";
const Loginn = () => {
  return (
    <div>
      <section className="text-black">
        <div className="container-fluid vh-100"></div>
        {/* grid container */}
        <div className="row">
          {/* left content */}
          <div className="col">
            <h1>Level up with SneakrZ. SingUp now!</h1>
            <div>
              <img src={LoginImage} alt="" />
            </div>
            <div>
              <p>
                Already have an account? <Link>Login</Link>
              </p>
            </div>
          </div>
          {/* right content */}
          <div className="col"></div>
        </div>
      </section>
    </div>
  );
};

export default Loginn;
