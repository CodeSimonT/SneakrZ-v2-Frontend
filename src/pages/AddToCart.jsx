import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../redux/cart/userData.js";
import { deleteItem } from "../redux/feature/authSlice.js";
import TokenValidation from "../middleware/TokenValidation.jsx";
import UserValidation from "../middleware/UserValidation";
import { sizes } from "../constants/index.js";
import { quantityN, shoeSize } from "../redux/feature/authSlice.js";
import { fetchAllShoes } from "../redux/cart/getAllShoes.js";

const AddToCart = () => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = localStorage.getItem("user");
  const getToken = localStorage.getItem("auth");

  if (!getUser && !getToken) {
    return (
      <>
        <UserValidation />
      </>
    );
  }
  if (!getToken) {
    return (
      <>
        <TokenValidation />
      </>
    );
  }

  const { token } = JSON.parse(getToken);
  const [allShoes, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [quantity, setQuantity] = useState("");
  const { items, loading } = useSelector((item) => item.data);

  useEffect(() => {
    dispatch(getUserData({ token: token, navigate }));
    console.log(items);
  }, []);
  const calling = () => {
    setData(items);
    console.log(items);
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
      console.log(item, id);
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
      const dataitem = items.cart.map((item) => item.product.price);
      const totalI = dataitem.reduce((a, b) => a + b, 0);
      const tolocal = totalI.toLocaleString();
      setTotal(tolocal);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [loading]);

  return (
    <>
      <section className="urbanist pt-4 pb-5">
        <div className="container-fluid mt-3">
          <div className="row">
            {/* left content */}
            <div className="col-12 col-lg-8">
              <h2 className="mb-4">Bag</h2>
              <div className="row">
                {allShoes.cart?.map((item) => (
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
                          <h6>${item.product.price}</h6>
                        </div>
                        <h6 className="colorGray mb-2">{item.product.for} </h6>
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
                ))}
              </div>
            </div>
            {/* right content */}
            <div className="col-12 col-lg-4">
              <h2 className="mb-4">Summary</h2>
              <div className="d-flex justify-content-between w-100 mb-3">
                <h5>SubTotal</h5>
                <h5>{total}</h5>
              </div>
              <div className="d-flex justify-content-between w-100 mb-3">
                <h5>Estimated Delivery & Handling</h5>
                <h5>Free</h5>
              </div>
              {/* total */}
              <div className="d-flex justify-content-between w-100 py-3">
                <h5>total</h5>
                <h5>{total}</h5>
              </div>
              <div className="addButton pointer w-100 py-3 mt-4 rounded-pill text-center">
                <h5
                  className="mb-0 text-white pointer "
                  onClick={(calling, calculateTotal)}
                >
                  Checkout
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          
        </div> */}
      </section>
    </>
  );
};

export default AddToCart;
