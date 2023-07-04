import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoopMen from "../middleware/ShoesLoopMen.jsx";
import { arrow } from "../assets/icons/icons.js";
import { PlaceHolder } from "../middleware";
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
  const [value, setValue] = useState([]);
  const [toggle, setToggle] = useState("Nike");
  const [toggle2, setToggle2] = useState("Sort by Price");
  let container = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adidasItem, newBalanceItem, nikeItem, underArmourItem, loading } =
    useSelector((state) => state.allShoesMen);

  // sorting
  useEffect(() => {
    if (toggle2 === "Price: Low-High") {
      const maxValue = [...value].sort((a, b) => a.price - b.price);
      setValue(maxValue);
    } else {
      const minValue = [...value]?.sort((a, b) => b.price - a.price);
      setValue(minValue);
    }
  }, [toggle2, toggle]);
  // store to value state
  useEffect(() => {
    if (toggle === "Nike") {
      setValue(nikeItem.task);
    } else if (toggle === "Adidas") {
      setValue(adidasItem.task);
    } else if (toggle === "NewBalance") {
      setValue(newBalanceItem.task);
    } else if (toggle === "Under Armour") {
      setValue(underArmourItem.task);
    }
  }, [nikeItem.task, adidasItem.task, toggle]);

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

  if (loading) {
    return (
      <>
        <PlaceHolder />
      </>
    );
  }
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
                <h3> Men's Shoes {value?.length} pieces </h3>
              </div>
              {/* dropdown */}
              <div className={`dropdown ${styling.CenterY} ms-0 ms-lg-4`}>
                <div
                  className={`${styling.CenterY}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="fs-5 mb-0 pointer">Brand: {toggle}</p>
                  <div className={`${styling.CenterY} accordionIconW ms-2`}>
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
                  <p className="fs-5 mb-0 pointer">{toggle2}</p>
                  <div className={`${styling.CenterY} accordionIconW ms-2`}>
                    <img src={arrow} alt="" className="w-100" />
                  </div>
                </div>
                <ul className="dropdown-menu px-2 fs-5">
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
              value?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNikeMen}
                />
              ))}
            {/* adidas */}
            {toggle === "Adidas" &&
              value?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleAddidasMen}
                />
              ))}
            {/* newBalance */}
            {toggle === "NewBalance" &&
              value?.map((item) => (
                <ShoesLoopMen
                  value={item}
                  key={item._id}
                  propDispatch={dispatchSingleNewbalanceMen}
                />
              ))}
            {/* underArmour */}
            {toggle === "Under Armour" &&
              value?.map((item) => (
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
