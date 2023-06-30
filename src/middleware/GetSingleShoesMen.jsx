import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styling } from "../../style/style";
import { arrow } from "../assets/icons/icons";
import PlaceHolderSingle from "./PlaceHolderSingle";
const GetSingleShoes = () => {
  const { singleItem, loadingS } = useSelector((state) => state.allShoesMen);
  console.log(singleItem);
  if (loadingS) {
    return (
      <>
        <PlaceHolderSingle />
      </>
    );
  }
  return (
    <>
      <section className="py-5 my-5 px-0 px-lg-5 urbanist">
        <div className="container-fluid ">
          <div className="row">
            {/* image container */}
            <div className="col-12 col-lg-7 position-relative">
              <div className="position-sticky top-0 w-100 px-0 px-lg-3">
                <img src={singleItem?.task.image} alt="" className="w-100" />
              </div>
            </div>
            {/* text container */}
            <div className="col-12 col-lg-5">
              <div className="px-0 px-lg-3 mt-2">
                {/* heading */}
                <div className="mb-5">
                  <h1 className="Staatliches mb-2">{singleItem?.task.title}</h1>
                  <h5 className="mb-4">{singleItem?.task.for}</h5>
                  <h5>${singleItem?.task.price}</h5>
                </div>
                {/* size */}
                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <h6>Select Size</h6>
                    <h6 className="colorGray">Size Guide</h6>
                  </div>
                </div>
                {/* size */}
                <div className="px-2">
                  <div className="row">
                    {singleItem?.task.size.map((item, index) => (
                      <div className="col-4 px-1 pb-2 pointer " key={index}>
                        <div className="sizeContainer">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* add button */}
                <div className="addButton pointer w-100 py-3 mt-2 rounded-pill text-center">
                  <h5 className="mb-0 text-white pointer ">Add to Bag</h5>
                </div>
                <div className="addButton2 pointer w-100 py-3 mt-3 rounded-pill text-center">
                  <h5 className="mb-0 pointer ">Favorite</h5>
                </div>
                {/* description */}
                <div className="mt-5 mb-5">
                  <p className="">{singleItem?.task.description} </p>
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
                        <div className={`${styling.CenterY} `}>
                          <h4 className="pointer">Free Delivery and Returns</h4>
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
                        <div className={styling.CenterY}>
                          <h4 className="pointer">Reviews</h4>
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

export default GetSingleShoes;
