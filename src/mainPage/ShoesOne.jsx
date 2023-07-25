import React from "react";
import { Shoes2, shoes1 } from "../assets/images";
import { Link } from "react-router-dom";
const ShoesOne = () => {
  return (
    <div className="container-fluid py-5 urbanist">
      <div className="row">
        {/* image */}
        <div className="col-12 col-lg-6 d-flex justify-content-end  align-items-centers">
          <div className="ms-0 ms-lg-5 mb-3 mb-lg-0">
            <img src={shoes1} alt="" className="w-100  borderRB shadowD" />
          </div>
        </div>
        {/* text content */}
        <div className="col-12 col-lg-6 d-flex justify-content-center  align-items-centers flex-column">
          <h1 className="urbanistBold mb-3">
            Dedicate to quantity <br /> and result
          </h1>
          <p className="mainText mb-5">
            Providing the best shoes of various types and manufacturing them for
            true travel lovers. This Items are lightweight and comfortable.
          </p>
          <div>
            <button className="buttonStyle">
              <Link className="text-white" to={"/AllShoes"}>
                Shop
              </Link>
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-5 pt-5 d-flex justify-content-end d-block d-lg-none align-items-centers">
          <div className="">
            <img src={Shoes2} alt="" className="w-100  borderRB shadowD" />
          </div>
        </div>
        {/* text content */}
        <div className="col-12 col-lg-6 mt-0 pt-3 mt-lg-5 pt-lg-5 d-flex justify-content-center align-items-end textRight flex-column">
          <h1 className="urbanistBold mb-3">The world runs in pegasus</h1>
          <p className="mainText mb-5">
            Explore our collection today and experience the perfect blend of
            quality and style for all your adventures
          </p>
          <div>
            <button className="buttonStyle">shop</button>
          </div>
        </div>
        {/* image */}
        <div className="col-12 col-lg-6 mt-5 pt-5 d-flex justify-content-end  d-none d-lg-block align-items-centers">
          <div className="me-5">
            <img src={Shoes2} alt="" className="w-100  borderRB shadowD" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesOne;
