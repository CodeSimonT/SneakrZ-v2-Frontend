import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styling } from "../../../../style/style.js";
import { PlaceHolder } from "../../../middleware/index.js";
import { arrow } from "../../../assets/icons/icons.js";
import axios from "axios";
import {
  fetchAllShoes,
  fetchSingleShoes,
} from "../../../redux/cart/getAllShoes.js";

const AllShoes = () => {
  const [value, setValue] = useState([]);
  const [toggle2, setToggle2] = useState("Price: Low-High");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading } = useSelector((state) => state.allShoes);
  const dispatchSingle = (id) => {
    console.log(id);
    dispatch(fetchSingleShoes({ id, navigate }));
  };
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
    dispatch(fetchAllShoes());
  }, [dispatch]);

  useEffect(() => {
    setValue(items.task);
  }, [loading]);

  useEffect(() => {
    console.log(value);
  }, [loading]);

  if (loading) {
    return (
      <div>
        <PlaceHolder />
      </div>
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
                <h3>All Shoes {value?.length} pieces </h3>
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
            {value?.map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4 pointer "
                key={item._id}
                onClick={() => dispatchSingle(item._id)}
              >
                <div className="card w-100 cardShadow urbanist">
                  <img src={item.image} className="card-img-top" />
                  <div className="card-body">
                    <h6 className="card-title">{item.title} </h6>
                    <p className="card-text colorGray">{item.for}</p>
                    <p className="card-text colorGray">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllShoes;
