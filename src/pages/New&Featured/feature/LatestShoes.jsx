import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeatureLoop from "../../../middleware/FeatureLoop.jsx";
import { PlaceHolder } from "../../../middleware";
import {
  getAllNewbalanceMen,
  getSingleNewbalanceMen,
} from "../../../redux/cart/menShoes.js";
import {
  getAllNewbalanceWomen,
  getSingleNewbalanceWomen,
} from "../../../redux/cart/womenShoes.js";
import { styling } from "../../../../style/style.js";

const LatestShoes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBalanceMen = useSelector((state) => state.allShoesMen);
  const newBalanceWomen = useSelector((state) => state.allShoesWomen);
  // function for selecting a single item
  // adidas
  const dispatchSingleNewbalanceMen = (id) => {
    console.log(id);
    dispatch(getSingleNewbalanceMen({ id, navigate }));
  };
  const dispatchSingleNewbalanceWomen = (id) => {
    console.log(id);
    dispatch(getSingleNewbalanceWomen({ id, navigate }));
  };

  useEffect(() => {
    dispatch(getAllNewbalanceMen());
    dispatch(getAllNewbalanceWomen());
  }, [dispatch]);

  if (newBalanceMen.loading && newBalanceWomen.loading) {
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
                  Latest Shoes{" "}
                  {newBalanceMen.newBalanceItem.task?.length +
                    newBalanceWomen.newBalanceItem.task?.length}{" "}
                  pieces
                </h3>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {/* men */}
            {newBalanceMen.newBalanceItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleNewbalanceMen}
              />
            ))}
            {/* Women */}
            {newBalanceWomen.newBalanceItem.task?.map((item) => (
              <FeatureLoop
                value={item}
                key={item._id}
                propDispatch={dispatchSingleNewbalanceWomen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestShoes;
