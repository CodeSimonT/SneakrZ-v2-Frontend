import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserData, getReceivedItem } from "../../redux/cart/userData";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../redux/cart/userData.js";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = localStorage.getItem("auth");
  const [token, setToken] = useState("");
  const [total, setTotal] = useState(0);
  const { receivedData, loading } = useSelector((item) => item.data);
  console.log(receivedData);

  useEffect(() => {
    if (getToken) {
      const token = JSON.parse(getToken);
      dispatch(getReceivedItem({ token: token, navigate }));
      // dispatch(getOrder({ token: token, navigate }));
      setToken(token);
    }
  }, [getToken]);
  // calculate total
  const calculateTotal = () => {
    if (receivedData && receivedData.cart) {
      const flattenedItems = receivedData.cart.flatMap((item) => item.items); // Flatten the items array

      const totalI = flattenedItems.reduce(
        (acc, cur) => acc + cur.product.price * cur.quantity,
        0
      );
      const tolocal = totalI.toLocaleString();
      setTotal(tolocal);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [loading]);

  const formatDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = dateObj.toLocaleDateString(undefined, dateOptions);
    const formattedTime = dateObj.toLocaleTimeString(undefined, timeOptions);
    return `${formattedDate} - ${formattedTime}`;
  };
  const calculateDiscountedPrice = (item) => {
    const originalPrice = item.product.price;
    const discountPercentage = item.product.sale;
    const discountedPrice =
      originalPrice - (originalPrice * discountPercentage) / 100;
    return discountedPrice;
  };
  return (
    <div className="urbanist">
      {receivedData?.cart?.length === 0 ? (
        <div className="text-center">
          <h2 className="urbanistBold">No history</h2>
        </div>
      ) : (
        <div>
          {receivedData?.cart?.map((value, index) => (
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
                      <div className="d-flex">
                        <p className="me-2">Size: {item.product.size}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      {/* total */}
                      <div className="d-flex">
                        <p className="me-2">Ordered Time: </p>
                        <p>{formatDateTime(value.receivedDate)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
