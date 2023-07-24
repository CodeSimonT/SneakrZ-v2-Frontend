import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData, getUser } from "../redux/cart/userData.js";
import { deleteItem } from "../redux/feature/authSlice.js";
import UserValidation from "../middleware/UserValidation";
import { sizes } from "../constants/index.js";
import { quantityN, shoeSize } from "../redux/feature/authSlice.js";
import { paymentMethod } from "../constants/index.js";
import { styling } from "../../style/style.js";
import { checkoutItem } from "../redux/cart/userData.js";
import { cleanCart } from "../redux/cart/userData.js";

const AddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("auth");
  const [token, setToken] = useState("");
  const [total, setTotal] = useState(0);
  const [allShoes, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [logOutConfirm, setlogOutConfirm] = useState(true); // mop toggle
  const { items, info, checkout, loading } = useSelector((item) => item.data);
  console.log(checkout);
  // if (getToken) {
  //   console.log("present");
  // }
  useEffect(() => {
    if (getToken) {
      // const { hasAddress } = JSON.parse(getUserAddress);
      const token = JSON.parse(getToken);
      dispatch(getUser({ token: token, navigate }));
      setToken(token);
      // setHasAddress(hasAddress);
    }
  }, [getToken]);
  const toggleToreceived = () => {
    localStorage.setItem("toReceived", "true");
  };
  // console.log(info);
  // console.log(items);

  useEffect(() => {
    if (!getToken) {
      setData({});
    }
  }, [getToken]);
  // chechout function
  const chekingOut = () => {
    dispatch(checkoutItem({ token: token, navigate }));
    dispatch(cleanCart());
  };
  // console.log(token);
  useEffect(() => {
    if (getToken) {
      const token = JSON.parse(getToken);
      dispatch(getUserData({ token: token, navigate }));
      setToken(token);
    }
  }, [getToken]);

  // useEffect(() => {
  //   if (getToken) {
  //     // const { hasAddress } = JSON.parse(getUserAddress);
  //     const token = JSON.parse(getToken);
  //     dispatch(getUser({ token: token, navigate }));
  //     setToken(token);
  //     // setHasAddress(hasAddress);
  //   }
  // }, []);

  const calling = () => {
    setData(items);
  };
  useEffect(() => {
    calling();
  }, [loading || items?.cart]);

  // quantity update
  const updateQuantity = useCallback(
    async (item, id) => {
      await dispatch(quantityN({ token, id, item }));
      setToggle(true);
    },
    [dispatch, token]
  );
  // size update
  const updateSize = useCallback(
    async (item, id) => {
      await dispatch(shoeSize({ token, id, item }));
      setToggle(true);
    },
    [dispatch, token]
  );

  // delete function
  const deleteData = useCallback(async (id) => {
    await dispatch(deleteItem({ token: token, id, navigate }));
    const updatedShoes = allShoes.cart.filter((item) => item._id !== id);
    setData({ ...allShoes, cart: updatedShoes });
    setToggle(true);
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUserData({ token }));
        setToggle(false);
      } catch (error) {
        // Handle any error
        console.log(error);
        setToggle(false); // Reset toggle state in case of an error
      }
    };

    if (toggle) {
      fetchData();
    }
  }, [dispatch, toggle, token]);

  const calculateTotal = () => {
    if (items && items.cart) {
      const totalPrice = items.cart.reduce((acc, item) => {
        const priceAfterSale =
          item.product.price * (1 - item.product.sale / 100);
        return acc + priceAfterSale * item.quantity;
      }, 0);

      const tolocal = totalPrice.toLocaleString();
      setTotal(tolocal);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [loading, items]);

  const calculateDiscountedPrice = (item) => {
    const originalPrice = item.product.price;
    const discountPercentage = item.product.sale;
    const discountedPrice =
      originalPrice - (originalPrice * discountPercentage) / 100;
    return discountedPrice;
  };
  return (
    <>
      {!getToken && <UserValidation />}
      <section className="urbanist pt-4 pb-5">
        <div className="container-fluid mt-3">
          <div className="row">
            {/* left content */}
            <div className="col-12 col-lg-8">
              <h2 className="mb-4">Cart</h2>
              <div className="row">
                {allShoes.cart?.length === 0 ? (
                  <div className=" w-100 d-flex justify-content-center align-items-center">
                    <h2>Your cart is empty</h2>
                  </div>
                ) : (
                  allShoes.cart?.map((item) => (
                    <div className="col-12 mb-3" key={item._id}>
                      <div className="row ">
                        <div className="col-12 col-sm-3 ">
                          <img
                            src={item.product.image}
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="col-12 col-sm-9">
                          <div className="d-flex justify-content-between my-2">
                            <h5>{item.product.title} </h5>
                            <h6 className="text-end">
                              <del className="footerTextColorGray">
                                ${item.product.price.toLocaleString()}
                              </del>{" "}
                              ${calculateDiscountedPrice(item).toLocaleString()}
                            </h6>
                          </div>
                          <div className="d-flex justify-content-between my-2">
                            <h6 className="colorGray mb-2">
                              {item.product.for}
                            </h6>
                            <h6 className="colorGray mb-2 yellowGreen">
                              %{item.product.sale}
                            </h6>
                          </div>
                          <div className="d-flex ">
                            {/* size */}
                            <div className="dropdown pe-3">
                              <button
                                className="px-2 borderR btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {item.product.size}
                              </button>
                              <ul className="dropdown-menu col-5 ">
                                {sizes.map((value, index) => (
                                  <li
                                    key={index}
                                    className="px-3"
                                    onClick={() =>
                                      updateSize(value.size, item._id)
                                    }
                                  >
                                    {value.size}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* quantity */}
                            <div className="dropdown">
                              <button
                                className="px-2 borderR btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {item.quantity}
                              </button>
                              <ul className="dropdown-menu col-1">
                                {sizes.map((value, index) => (
                                  <li
                                    key={index}
                                    className="px-3"
                                    onClick={() =>
                                      updateQuantity(value.id, item._id)
                                    }
                                  >
                                    {value.id}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <h5
                            className="pointer mt-5"
                            onClick={() => {
                              deleteData(item._id);
                            }}
                          >
                            remove
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* right content */}
            <div className="col-12 col-lg-4">
              {/* payment method */}
              <div className="mb-3">
                <div>
                  <h3 className="mb-3">Payment Method</h3>
                </div>
                <div className="row">
                  {paymentMethod.map((item, index) => (
                    <div className={`col-6`} key={index}>
                      <div
                        className={`${
                          styling.flexCenter
                        } p-3 rounded mb-3 colorGrayBack pointer ${
                          index === 2 ? "addButton text-white" : ""
                        }`}
                        onClick={() => {
                          if (index === 0 || index === 1 || index === 3) {
                            setlogOutConfirm(false);
                          }
                        }}
                      >
                        <h6 className="pointer">{item.title} </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* address */}
              <div className="mb-3">
                <div className="mb-3">
                  <h3>User Address</h3>
                </div>
                {/* address container */}
                <div className="ms-3">
                  {/* house No */}
                  <div>
                    <p className="mb-2">House no: {info.houseNumber} </p>
                  </div>
                  {/* address */}
                  <div>
                    <p className="mb-2">Address: {info.address} </p>
                  </div>
                  {/* city */}
                  <div>
                    <p className="mb-2">City: {info.city} </p>
                  </div>
                  {/* country */}
                  <div>
                    <p className="mb-2">Country: {info.country} </p>
                  </div>
                </div>
              </div>
              {/* subtotal */}
              <div>
                <h2 className="mb-4">Summary</h2>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h5>Payment Method</h5>
                  <h5>COD</h5>
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h5>SubTotal</h5>
                  <h5>$ {total}</h5>
                </div>
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h5>Estimated Delivery & Handling</h5>
                  <h5>Free</h5>
                </div>
                {/* total */}
                <div className="d-flex justify-content-between w-100 py-3">
                  <h5>total</h5>
                  <h5>$ {total}</h5>
                </div>
              </div>
              {/* checkout button */}
              <div className="addButton pointer w-100 py-3 mt-4 rounded-pill text-center">
                <h5
                  className="mb-0 text-white pointer "
                  onClick={() => {
                    toggleToreceived(), chekingOut();
                  }}
                >
                  Checkout
                </h5>
              </div>
              {/* The Bootstrap Modal */}
              <div
                className={`modal ${!logOutConfirm ? "show" : "hide"}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: !logOutConfirm ? "block" : "none" }}
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <h3 className="modal-title mb-2">We are sorry</h3>
                      {/* intro */}
                      <div>
                        <p>
                          Cash on Delivery (COD) is our only mode of payment for
                          now{" "}
                        </p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          className="btn colorGrayBack"
                          onClick={() => setlogOutConfirm(true)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!logOutConfirm && (
                <div className="modal-backdrop fade show"></div>
              )}
              {/* End of Bootstrap Modal */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
