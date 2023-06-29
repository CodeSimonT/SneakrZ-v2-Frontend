import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoesLoop from "../../../middleware/ShoesLoopMen";
import {
  getAllNikeMen,
  getSingleNikeMen,
} from "../../../redux/cart/menShoes.js";

const Nike = () => {
  const [toggle2, setToggle2] = useState("Price: Low-High");
  let container = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nikeItem } = useSelector((state) => state.allShoesMen);

  // function for selecting a single item
  // nike
  const dispatchSingleNikeMen = (id) => {
    console.log(id);
    dispatch(getSingleNikeMen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllNikeMen());
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
              <div className={`me-0 mb-2 `}>
                <h3> Nike {nikeItem?.task?.length} pieces </h3>
              </div>
            </div>
            {/* right content */}
            <div>
              {/* sort */}
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle fs-5"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {toggle2}
                </button>
                <ul className="dropdown-menu px-3">
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
            {nikeItem?.task?.map((item) => (
              <ShoesLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleNikeMen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nike;
