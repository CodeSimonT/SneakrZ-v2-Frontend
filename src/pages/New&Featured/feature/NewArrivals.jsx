import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeatureLoop from "../../../middleware/FeatureLoop.jsx";
import { PlaceHolder } from "../../../middleware";
import { styling } from "../../../../style/style.js";
import { arrow } from "../../../assets/icons/icons.js";
import { selectItem } from "../../../redux/cart/getAllShoes.js";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [toggle2, setToggle2] = useState("Sort By:");
  const { items, loading } = useSelector((state) => state.allShoes);

  useEffect(() => {
    if (toggle2 === "Price: Low-High") {
      const maxValue = [...value].sort((a, b) => b.price - a.price);
      setValue(maxValue);
    } else {
      const minValue = [...value]?.sort((a, b) => a.price - b.price);
      setValue(minValue);
    }
  }, [toggle2]);

  useEffect(() => {
    const bestSellerShoes = items?.task?.filter(
      (item) => item.promo === "New Arrivals"
    );
    console.log(value);
    setValue(bestSellerShoes);
  }, [loading]);

  const dispatchSingle = (id) => {
    dispatch(selectItem(id));
    navigate("/SingleShoes");
  };

  const adidasMen = useSelector((state) => state.allShoesMen);
  const adidasWomen = useSelector((state) => state.allShoesWomen);
  // function for selecting a single item

  if (adidasMen.loading && adidasWomen.loading) {
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
                <h3>New Arrivals {value?.length} pieces</h3>
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
                  <p className="fs-5 bold mb-0">{toggle2}</p>
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
            {/* men */}
            {value?.map((item) => (
              <FeatureLoop
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

export default NewArrivals;
