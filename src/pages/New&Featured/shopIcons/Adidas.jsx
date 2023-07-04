import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoop from "../../../middleware/ShoesLoopMen";
import { PlaceHolder } from "../../../middleware";
import { styling } from "../../../../style/style";
import { arrow } from "../../../assets/icons/icons";
import {
  getAllAddidasMen,
  getSingleAddidasMen,
} from "../../../redux/cart/menShoes.js";

const Adidas = () => {
  const [toggle2, setToggle2] = useState("Price: Low-High");
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adidasItem, loading } = useSelector((state) => state.allShoesMen);

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
    setValue(adidasItem.task);
  }, [adidasItem.task]);
  // function for selecting a single item
  // nike
  const patchSingleAddidasMen = (id) => {
    console.log(id);
    dispatch(getSingleAddidasMen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllAddidasMen());
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
              <div className={`me-0 mb-2 `}>
                <h3> Adidas {value?.length} pieces </h3>
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
            {value?.map((item) => (
              <ShoesLoop
                value={item}
                key={item._id}
                propDispatch={patchSingleAddidasMen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Adidas;
