import React from "react";
import { styling } from "../../style/style";
const PlaceHolder = () => {
  const dummyContent = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <>
      <section className="pb-3 my-5 px-3">
        <div className="container-fluid ">
          {/* number item && brands && sort */}
          <div className="d-flex justify-content-between flex-column flex-md-row w-100 mt-5 mb-3">
            {/* left content */}
            <div className="d-flex flex-column flex-md-row">
              {/* number List */}
              <div className={`me-0 ${styling.CenterY}`}>
                <h3>Shoes </h3>
              </div>
            </div>
            {/* right content */}
            <div>
              {/* sort */}
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle fs-5"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Price: High-Low
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Price: Low-High
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {dummyContent.map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4 pointer "
                key={item}
              >
                <div className="card w-100 cardShadow urbanist placeholder-glow">
                  <div className="card-img-top dummyImage placeholder col-12">
                    item
                  </div>
                  <div className="card-body placeholder-glow">
                    <h6 className="card-title placeholder col-7"></h6>
                    <p className="card-text  placeholder col-6"></p>
                    <p className="card-text  placeholder col-7"></p>
                    <p className="card-text  placeholder col-6"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceHolder;
