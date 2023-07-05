import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../redux/cart/userData.js";
// import { deleteUserData } from "../redux/cart/deleteData.js";
import TokenValidation from "../middleware/TokenValidation.jsx";
import UserValidation from "../middleware/UserValidation";

const AddToCart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = localStorage.getItem("user");
  const getToken = localStorage.getItem("auth");

  if (!getUser) {
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
  const { items, loading } = useSelector((item) => item.data);

  // const deleteItem = (id) => {
  //   dispatch(deleteUserData({ token: token, id, navigate }));
  // };
  useEffect(() => {
    dispatch(getUserData({ token: token, navigate }));
    console.log(items);
  }, []);

  const calculateTotal = () => {
    if (items && items.cart) {
      const dataitem = items.cart.map((item) => item.product.price);
      const totalI = dataitem.reduce((a, b) => a + b, 0);
      setTotal(totalI);
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
                {items.cart?.map((item, index) => (
                  <div className="col-12 mb-3" key={item._id}>
                    <div className="row ">
                      {/* image */}
                      <div className="col-12 col-sm-3 ">
                        <img
                          src={item.product.image}
                          alt=""
                          className="w-100"
                        />
                      </div>
                      {/* text content */}
                      <div className="col-12 col-sm-9">
                        {/* heading */}
                        <div className="d-flex justify-content-between my-2">
                          <h5>{item.product.title} </h5>
                          <h6>${item.product.price}</h6>
                        </div>
                        <h6 className="colorGray mb-2">{item.product.for} </h6>
                        <h6 className="colorGray">Quantity {item.quantity}</h6>
                        <h5
                          className="pointer mt-5"
                          // onClick={() => deleteItem(item._id)}
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
                <h5 className="mb-0 text-white pointer ">Checkout</h5>
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
