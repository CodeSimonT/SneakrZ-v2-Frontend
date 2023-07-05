import React from "react";
import { heroImage } from "../assets/images";
import { styling } from "../../style/style.js";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="">
        <div className="container-fluid Staatliches">
          <div className="row position-relative">
            {/* hero title (absolute) */}
            <div
              className={`col-6 ms-5 d-none d-lg-flex heroAbsolute justify-content-center align-items-start flex-column`}
            >
              <h1 className="heroHeadingStyle bold">
                Step up your game with SneakrZ!
              </h1>
              <p className="urbanist heroSubText">
                Discover the hottest kicks, limited editions, and exclusive
                releases. Elevate your style and stay one step ahead in the
                sneaker culture. Join the hype now!
              </p>
              <div className="d-flex justify-content-start w-100">
                <button className="buttonStyle">
                  <Link className="text-white" to={"/AllShoes"}>
                    Shop kicks!
                  </Link>
                </button>
              </div>
            </div>

            {/* hero title (main) */}
            <div className="col-lg-4 col-12 ">
              <div
                className={`d-flex d-lg-none flex-column text-center pt-3 pt-md-4 px-md-5`}
              >
                <h1 className="heroHeadingStyle bold">
                  Step up your game with SneakrZ!
                </h1>
                <p className="urbanist ">
                  Discover the hottest kicks, limited editions, and exclusive
                  releases. Elevate your style and stay one step ahead in the
                  sneaker culture. Join the hype now!
                </p>
                <div>
                  <button className="buttonStyle ">Shop kicks!</button>
                </div>
              </div>
            </div>
            {/* hero image */}
            <div className={`${styling.flexCenter} col-lg-8 col-12 ps-lg-5`}>
              <img src={heroImage} alt="" className="w-75" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
