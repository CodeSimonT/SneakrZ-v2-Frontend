import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeatureLoop from "../../../middleware/FeatureLoop.jsx";
import { PlaceHolder } from "../../../middleware";
import {
  getAllNikeMen,
  getSingleNikeMen,
} from "../../../redux/cart/menShoes.js";
import {
  getAllNikeWomen,
  getSingleNikeWomen,
} from "../../../redux/cart/womenShoes.js";
import { styling } from "../../../../style/style.js";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nikeMen = useSelector((state) => state.allShoesMen);
  const nikeWomen = useSelector((state) => state.allShoesWomen);
  // function for selecting a single item
  // adidas
  const dispatchSingleNikeMenn = (id) => {
    console.log(id);
    dispatch(getSingleNikeMen({ id, navigate }));
  };
  const dispatchSingleNikeWomen = (id) => {
    console.log(id);
    dispatch(getSingleNikeWomen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllNikeMen());
    dispatch(getAllNikeWomen());
  }, [dispatch]);

  if (nikeMen.loading && nikeWomen.loading) {
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
                <h3>
                  New Arrivals{" "}
                  {nikeMen.nikeItem.task?.length +
                    nikeWomen.nikeItem.task?.length}{" "}
                  pieces
                </h3>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {/* men */}
            {nikeMen.nikeItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleNikeMenn}
              />
            ))}
            {/* Women */}
            {nikeWomen.nikeItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleNikeWomen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
