import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoop from "../../../middleware/ShoesLoopMen";
import { PlaceHolder } from "../../../middleware";
import { styling } from "../../../../style/style";
import { arrow } from "../../../assets/icons/icons";
import { selectItem } from "../../../redux/cart/getAllShoes";

const Nike = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [toggle2, setToggle2] = useState("Sort By:");
  const { items, loading } = useSelector((state) => state.allShoes);

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

  useEffect(() => {
    const bestSellerShoes = items?.task?.filter(
      (item) => item.brand === "Nike"
    );
    setValue(bestSellerShoes);
  }, [loading]);

  const dispatchSingle = (id) => {
    dispatch(selectItem(id));
    navigate("/SingleShoes");
  };

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
              <div className={`me-0 mb-2 `}>
                <h3> Nike {value?.length} pieces </h3>
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
                  <p className="fs-5 mb-0 bold pointer">{toggle2}</p>
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
              <ShoesLoop
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

export default Nike;
