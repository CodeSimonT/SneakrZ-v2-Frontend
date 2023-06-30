import React from "react";
import { styling } from "../../style/style";
import { arrow } from "../assets/icons/icons";

const PlaceHolderSingle = () => {
  const dummyContent = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <>
      <section className="py-5 my-5 px-0 px-lg-5 urbanist">
        <div className="container-fluid ">
          <div className="row">
            {/* image container */}
            <div className="col-12 col-lg-7 position-relative placeholder-glow">
              <div className="position-sticky top-0 w-100 px-0 px-lg-3">
                <div className="PlaceHolderImage placeholder"></div>
              </div>
            </div>
            {/* text container */}
            <div className="col-12 col-lg-5">
              <div className="px-0 px-lg-3 mt-2">
                {/* heading */}
                <div className="mb-5 placeholder-glow">
                  <h1 className="Staatliches mb-2 w-75 placeholder">1</h1>
                  <h5 className="mb-4 w-75 placeholder">2</h5>
                  <h5 className="w-50 placeholder">3</h5>
                </div>
                {/* size */}
                <div>
                  <div className="d-flex justify-content-between mb-2 placeholder-glow">
                    <h6 className="placeholder">Select Size</h6>
                    <h6 className="placeholder">Size Guide</h6>
                  </div>
                </div>
                {/* size */}
                <div className="px-2">
                  <div className="row placeholder-glow">
                    {dummyContent.map((item) => (
                      <div className="col-4 px-1 pb-2 pointer  " key={item}>
                        <div className="sizeContainer w-100 placeholder"></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* add button */}
                <div className="addButton pointer w-100 py-3 mt-2 rounded-pill text-center placeholder-glow">
                  <h5 className="mb-0 text-white pointer placeholder">
                    Add to Bag
                  </h5>
                </div>
                <div className="addButton2 pointer w-100 py-3 mt-3 rounded-pill text-center placeholder-glow">
                  <h5 className="mb-0 pointer placeholder">Favorite</h5>
                </div>
                {/* description */}
                <div className="mt-5 mb-5 placeholder-glow">
                  <p className="placeholder col-12"></p>
                  <p className="placeholder col-12"></p>
                  <p className="placeholder col-12"></p>
                  <p className="placeholder col-12"></p>
                </div>
                {/* accordions */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* delivery */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <div
                        className="accordionButtonStyle1 collapsed px-0 py-4 d-flex justify-content-between"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div className={`${styling.CenterY} placeholder-glow`}>
                          <h4 className="pointer placeholder ">
                            Free Delivery and Returns
                          </h4>
                        </div>
                        <div className="accordionIconW pointer">
                          <img src={arrow} alt="" className="w-100" />
                        </div>
                      </div>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body px-0 colorGray">
                        <p className="mb-4">
                          Your order of ₱500,000 or more gets free standard
                          delivery.
                        </p>
                        <ul className="ms-2 mb-4">
                          <li>Standard delivered 1year Business Days</li>
                          <li>Express delivered 1second Business Days</li>
                        </ul>
                        <p className="mb-3">
                          Orders are processed and delivered Monday-Friday
                          (excluding public holidays).
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* reviews */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <div
                        className="accordionButtonStyle collapsed px-0 py-4 d-flex justify-content-between"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div className={`${styling.CenterY} placeholder-glow`}>
                          <h4 className="pointer placeholder">Reviews</h4>
                        </div>
                        <div className="accordionIconW">
                          <img src={arrow} alt="" className="w-100" />
                        </div>
                      </div>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">shessh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceHolderSingle;
