import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserData,
  getReceivedItem,
  getOrder,
  receivedItem,
  cleanOrdered,
} from "../../redux/cart/userData";

const ToReceived = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("auth");
  const [token, setToken] = useState("");
  const [total, setTotal] = useState(0);
  const { orderData, loading } = useSelector((item) => item.data);
  console.log(orderData);

  const receivedData = () => {
    dispatch(receivedItem({ token: token, navigate }));
    dispatch(getReceivedItem({ token: token, navigate }));
    dispatch(cleanOrdered());
  };
  const orderNottify = () => {
    localStorage.setItem("ReceivedItem", "true");
  };

  useEffect(() => {
    if (getToken) {
      const token = JSON.parse(getToken);
      dispatch(getUserData({ token: token, navigate }));
      dispatch(getOrder({ token: token, navigate }));
      setToken(token);
    }
  }, [getToken]);

  const calculateDiscountedPrice = (item) => {
    const originalPrice = item.product.price;
    const discountPercentage = item.product.sale;
    const discountedPrice =
      originalPrice - (originalPrice * discountPercentage) / 100;
    return discountedPrice;
  };

  // calculate total
  const calculateTotal = () => {
    if (orderData && orderData.cart) {
      const flattenedItems = orderData.cart.flatMap((item) => item.items); // Flatten the items array

      const totalI = flattenedItems.reduce(
        (acc, cur) => acc + calculateDiscountedPrice(cur) * cur.quantity,
        0
      );
      const tolocal = totalI.toLocaleString();
      setTotal(tolocal);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [loading, orderData]);

  const formatDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };

    const formattedDate = dateObj.toLocaleDateString(undefined, dateOptions);
    return `${formattedDate} `;
  };

  const addDays = (dateTimeString, days) => {
    const dateObj = new Date(dateTimeString);
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj.toISOString();
  };
  return (
    <div>
      {orderData?.cart?.length === 0 ? ( // Check if cart is empty
        <div className="text-center urbanistBold">
          <h2>Item to received is Empty.</h2>
          {/* Add any other content or message for an empty cart */}
        </div>
      ) : (
        // Cart has items, render the content
        <div>
          {orderData?.cart?.map((value, index) => (
            <div key={index}>
              {value.items.map((item) => (
                <div className="col-12 mb-3" key={item._id}>
                  <div className="row ">
                    <div className="col-12 col-sm-3 ">
                      <img src={item.product.image} alt="" className="w-100" />
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
                        <h6 className="colorGray mb-2">{item.product.for}</h6>
                        <h6 className="colorGray mb-2 yellowGreen">
                          %{item.product.sale}
                        </h6>
                      </div>
                      <div>
                        <p>Size {item.product.size}</p>
                        <p>Quantity {item.quantity}</p>
                      </div>
                      <div className="d-flex">
                        <p className="me-2">Estemated date to arrive </p>
                        <p>{formatDateTime(addDays(value.orderedDate, 5))}</p>
                      </div>
                      {/* total */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <p>${total}</p>
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => {
                receivedData(), orderNottify();
              }}
              className="userButtonStyle"
            >
              Item Received
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToReceived;
