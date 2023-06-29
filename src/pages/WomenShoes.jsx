import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoopWomen from "../middleware/ShoesLoopWomen.jsx";
import { arrow } from "../assets/icons/icons.js";
import { styling } from "../../style/style.js";
import {
  getAllAddidasWomen,
  getSingleAddidasWomen,
  getAllNewbalanceWomen,
  getSingleNewbalanceWomen,
  getAllNikeWomen,
  getSingleNikeWomen,
  getAllUnderArmourWomen,
  getSingleUnderArmourWomen,
} from "../redux/cart/womenShoes.js";

const WomenShoes = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("Nike");
  const [toggle2, setToggle2] = useState("Price: Low-High");
  let container = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adidasItem, newBalanceItem, nikeItem, underArmourItem } = useSelector(
    (state) => state.allShoesWomen
  );

  // function for selecting a single item
  // nike
  const dispatchSingleNikeWomen = (id) => {
    console.log(id);
    dispatch(getSingleNikeWomen({ id, navigate }));
  };
  // adidas
  const dispatchSingleAddidasWomen = (id) => {
    console.log(id);
    dispatch(getSingleAddidasWomen({ id, navigate }));
  };
  // newbalance
  const dispatchSingleNewbalanceWomen = (id) => {
    console.log(id);
    dispatch(getSingleNewbalanceWomen({ id, navigate }));
  };
  // under armour
  const dispatchSingleUnderArmourWomen = (id) => {
    console.log(id);
    dispatch(getSingleUnderArmourWomen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllAddidasWomen());
    dispatch(getAllNewbalanceWomen());
    dispatch(getAllNikeWomen());
    dispatch(getAllUnderArmourWomen());
    // dispatch(fetchAllShoes());

    // container.push(adidasItem?.task);
  }, [dispatch]);

  useEffect(() => {
    console.log(container);
  }, []);
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
                <h3>
                  {" "}
                  Women's Shoes{" "}
                  {(toggle === "Nike" && nikeItem?.task?.length) ||
                    (toggle === "Adidas" && adidasItem?.task?.length) ||
                    (toggle === "NewBalance" && newBalanceItem?.task?.length) ||
                    (toggle === "Under Armour" &&
                      underArmourItem?.task?.length)}{" "}
                  pieces{" "}
                </h3>
              </div>
              {/* dropdown */}
              <div className={`dropdown ${styling.CenterY} ms-0 ms-lg-4`}>
                <div
                  className={`${styling.CenterY}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="fs-4 mb-0">Brand: {toggle}</p>
                  <div className="accordionIconW ms-2">
                    <img src={arrow} alt="" className="w-100" />
                  </div>
                </div>
                <ul className="dropdown-menu px-3 fs-5">
                  <li className="pointer" onClick={() => setToggle("Nike")}>
                    Nike
                  </li>
                  <li className="pointer" onClick={() => setToggle("Adidas")}>
                    Adidas
                  </li>
                  <li
                    className="pointer"
                    onClick={() => setToggle("NewBalance")}
                  >
                    NewBalance
                  </li>
                  <li
                    className="pointer"
                    onClick={() => setToggle("Under Armour")}
                  >
                    UnderArmour
                  </li>
                </ul>
              </div>
            </div>
            {/* right content */}
            <div>
              {/* sort */}
              <div className={`dropdown ${styling.CenterY} ms-0 ms-lg-3`}>
                <div
                  className={`${styling.CenterY}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="fs-4 mb-0">{toggle2}</p>
                  <div className="accordionIconW ms-2">
                    <img src={arrow} alt="" className="w-100" />
                  </div>
                </div>
                <ul className="dropdown-menu px-3 fs-5">
                  <li
                    className="pointer"
                    onClick={() => setToggle2("Price: High-Low")}
                  >
                    Price: High-Low
                  </li>
                  <li
                    className="pointer"
                    onClick={() => setToggle2("Price: Low-High")}
                  >
                    Price: Low-High
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {/* nike */}
            {toggle === "Nike" &&
              nikeItem?.task?.map((item) => (
                <ShoesLoopWomen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNikeWomen}
                />
              ))}
            {/* adidas */}
            {toggle === "Adidas" &&
              adidasItem?.task?.map((item) => (
                <ShoesLoopWomen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleAddidasWomen}
                />
              ))}
            {/* newBalance */}
            {toggle === "NewBalance" &&
              newBalanceItem?.task?.map((item) => (
                <ShoesLoopWomen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNewbalanceWomen}
                />
              ))}
            {/* underArmour */}
            {toggle === "Under Armour" &&
              underArmourItem?.task?.map((item) => (
                <ShoesLoopWomen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleUnderArmourWomen}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WomenShoes;
