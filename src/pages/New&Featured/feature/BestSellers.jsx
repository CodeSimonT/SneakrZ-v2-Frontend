import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeatureLoop from "../../../middleware/FeatureLoop.jsx";
import { PlaceHolder } from "../../../middleware";
import {
  getAllAddidasMen,
  getSingleAddidasMen,
} from "../../../redux/cart/menShoes.js";
import {
  getAllAddidasWomen,
  getSingleAddidasWomen,
} from "../../../redux/cart/womenShoes.js";
import { styling } from "../../../../style/style.js";

const BestSellers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adidasMen = useSelector((state) => state.allShoesMen);
  const adidasWomen = useSelector((state) => state.allShoesWomen);
  // function for selecting a single item
  // adidas
  const dispatchSingleAddidasMen = (id) => {
    console.log(id);
    dispatch(getSingleAddidasMen({ id, navigate }));
  };
  const dispatchSingleAddidasWomen = (id) => {
    console.log(id);
    dispatch(getSingleAddidasWomen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllAddidasMen());
    dispatch(getAllAddidasWomen());
  }, [dispatch]);

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
                <h3>
                  Best Sellers{" "}
                  {adidasMen.adidasItem.task?.length +
                    adidasWomen.adidasItem.task?.length}{" "}
                  pieces
                </h3>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {/* men */}
            {adidasMen.adidasItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleAddidasMen}
              />
            ))}
            {/* Women */}
            {adidasWomen.adidasItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleAddidasWomen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
