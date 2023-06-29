import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoopMen from "../middleware/ShoesLoopMen.jsx";
import { arrow } from "../assets/icons/icons.js";
import {
  getAllAddidasMen,
  getSingleAddidasMen,
  getAllNewbalanceMen,
  getSingleNewbalanceMen,
  getAllNikeMen,
  getSingleNikeMen,
  getAllUnderArmourMen,
  getSingleUnderArmourMen,
} from "../redux/cart/menShoes.js";
import { styling } from "../../style/style.js";

const MenShoes = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("Nike");
  const [toggle2, setToggle2] = useState("Price: Low-High");
  let container = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adidasItem, newBalanceItem, nikeItem, underArmourItem } = useSelector(
    (state) => state.allShoesMen
  );

  // function for selecting a single item
  // nike
  const dispatchSingleNikeMen = (id) => {
    console.log(id);
    dispatch(getSingleNikeMen({ id, navigate }));
  };
  // adidas
  const dispatchSingleAddidasMen = (id) => {
    console.log(id);
    dispatch(getSingleAddidasMen({ id, navigate }));
  };
  // newbalance
  const dispatchSingleNewbalanceMen = (id) => {
    console.log(id);
    dispatch(getSingleNewbalanceMen({ id, navigate }));
  };
  // under armour
  const dispatchSingleUnderArmourMen = (id) => {
    console.log(id);
    dispatch(getSingleUnderArmourMen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllAddidasMen());
    dispatch(getAllNewbalanceMen());
    dispatch(getAllNikeMen());
    dispatch(getAllUnderArmourMen());
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
                  Men's Shoes{" "}
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
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNikeMen}
                />
              ))}
            {/* adidas */}
            {toggle === "Adidas" &&
              adidasItem?.task?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleAddidasMen}
                />
              ))}
            {/* newBalance */}
            {toggle === "NewBalance" &&
              newBalanceItem?.task?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNewbalanceMen}
                />
              ))}
            {/* underArmour */}
            {toggle === "Under Armour" &&
              underArmourItem?.task?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleUnderArmourMen}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenShoes;
