import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoopMen from "../middleware/ShoesLoopMen.jsx";
import { arrow } from "../assets/icons/icons.js";
import { PlaceHolder } from "../middleware";
import { styling } from "../../style/style.js";
import { selectItem } from "../redux/cart/getAllShoes.js";

const WomenShoes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [toggle, setToggle] = useState("Nike");
  const [toggle2, setToggle2] = useState("Sort By:");
  const { items, loading } = useSelector((state) => state.allShoes);

  useEffect(() => {
    const getDate = async () => {
      try {
        const placeHold = await items.task.filter(
          (item) => item.brand === "Nike" && item.sex === "Women"
        );
        setValue(placeHold);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [loading]);
  // toggle for the brand
  useEffect(() => {
    const getDate = async () => {
      try {
        const bestSellerShoes = await items.task.filter(
          (item) => item.brand === toggle && item.sex === "Women"
        );
        setValue(bestSellerShoes);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [loading, toggle]);

  const dispatchSingle = (id) => {
    dispatch(selectItem(id));
    navigate("/SingleShoes");
  };

  // sorting
  useEffect(() => {
    if (toggle2 === "Price: Low-High") {
      const maxValue = [...value].sort((a, b) => a.price - b.price);
      setValue(maxValue);
    } else {
      const minValue = [...value]?.sort((a, b) => b.price - a.price);
      setValue(minValue);
    }
  }, [toggle2]);

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
                <h3 onClick={() => console.log(value)}>
                  {" "}
                  Women Shoes {value?.length} pieces{" "}
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
                  <p className="fs-5 bold mb-0 pointer">Brand: {toggle}</p>
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
                    onClick={() => setToggle("Newbalance")}
                  >
                    NewBalance
                  </li>
                  <li
                    className="pointer"
                    onClick={() => setToggle("Underarmour")}
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
                  <p className="fs-5 bold mb-0 pointer">{toggle2}</p>
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
            {value?.map((item) => (
              <ShoesLoopMen
                value={item}
                key={item._id}
                propDispatch={dispatchSingle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WomenShoes;
