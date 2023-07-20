import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styling } from "../../style/style";
import { arrow } from "../assets/icons/icons";
import PlaceHolderSingle from "../middleware/PlaceHolderSingle.jsx";
import { addCart } from "../redux/feature/authSlice.js";
import UserValidation from "./UserValidation";
import ReactImageMagnify from "react-image-magnify";

const SingleShoes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("auth");
  const [token, setToken] = useState("");
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  useEffect(() => {
    if (getToken) {
      const { token } = JSON.parse(getToken);
      setToken(token);
    }
  }, []);

  // selected size
  const [sizing, setSizing] = useState("");
  // singleShoes to map in the web
  const [singleShoes, setItems] = useState({});
  const [sizeV, setSizeV] = useState(false);
  const [sizev, setSizev] = useState(false);
  // cart formData to send on the user Account
  const [formData, setFormData] = useState({});
  const { items, loadingS } = useSelector((state) => state.allShoes);

  // this code is to prevent the refresh error
  useEffect(() => {
    const shoesId = JSON.parse(localStorage.getItem("singleShoes"));
    const singleShoesa = items?.task?.find((item) => item._id === shoesId);
    setItems(singleShoesa);
    setFormData(singleShoesa);
    console.log(singleShoes);
  }, [items]);

  // add to cart function
  const dispatchItem = () => {
    console.log(formData);
    if (!sizeV) {
      setSizev(true);
    } else {
      token
        ? dispatch(addCart({ formData: formData, token: token, navigate }))
        : setUserDataLoaded(true);
    }
  };

  // updating shoes size
  useEffect(() => {
    setFormData((item) => {
      return {
        ...item,
        size: sizing,
      };
    });
    console.log(formData.size);
  }, [sizing]);

  if (loadingS) {
    return (
      <>
        <PlaceHolderSingle />
      </>
    );
  }

  return (
    <>
      {userDataLoaded && <UserValidation />}
      <section className="py-5 my-5 px-0 px-lg-5 urbanist">
        <div className="container-fluid ">
          <div className="row">
            {/* image container */}
            <div className="col-12 col-lg-7 position-relative">
              <div className="position-sticky top-0 w-100 px-0 px-lg-3">
                {/* <img src={singleShoes?.image} alt="" className="w-100" /> */}
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      isFluidWidth: true,
                      src: singleShoes?.image,
                    },
                    largeImage: {
                      src: singleShoes?.image,
                      width: 2000,
                      height: 2000,
                    },
                    enlargedImageContainerDimensions: {
                      width: "70%",
                      height: "50%",
                    },
                    mouseActivation: "hover",
                  }}
                />
              </div>
            </div>
            {/* text container */}
            <div className="col-12 col-lg-5">
              <div className="px-0 px-lg-3 mt-2">
                {/* heading */}
                <div className="mb-5">
                  <h1 className="Staatliches mb-2">{singleShoes?.title}</h1>
                  <h5 className="mb-4">{singleShoes?.for}</h5>
                  <h5>${singleShoes?.price}</h5>
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
                    {singleShoes?.size?.map((item, index) => (
                      <div
                        className={`col-4 px-1 pb-2 pointer `}
                        key={index}
                        onClick={() => {
                          setSizing(item), setSizev(false), setSizeV(true);
                        }}
                      >
                        <div
                          className={`${
                            sizing === item ? "selectedSize" : ""
                          } ${sizev ? "sizeValidation" : ""} sizeContainer`}
                        >
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* add button */}
                <div
                  className="addButton pointer w-100 py-3 mt-2 rounded-pill text-center"
                  onClick={dispatchItem}
                >
                  <h5 className="mb-0 text-white pointer ">Add to Bag</h5>
                </div>
                <div className="addButton2 pointer w-100 py-3 mt-3 rounded-pill text-center">
                  <h5 className="mb-0 pointer ">Favorite</h5>
                </div>
                {/* description */}
                <div className="mt-5 mb-5">
                  <p className="">{singleShoes?.description} </p>
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
                          <h5 className="pointer">Free Delivery and Returns</h5>
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
                          <h5 className="pointer">Reviews</h5>
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

export default SingleShoes;
