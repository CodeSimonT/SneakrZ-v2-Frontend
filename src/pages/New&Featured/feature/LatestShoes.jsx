import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styling } from "../../../../style/style.js";
import {
  fetchAllShoes,
  fetchSingleShoes,
} from "../../../redux/cart/getAllShoes.js";

const LatestShoes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.allShoes);

  const dispatchSingle = (id) => {
    console.log(id);
    dispatch(fetchSingleShoes({ id, navigate }));
  };
  useEffect(() => {
    dispatch(fetchAllShoes());
  }, [dispatch]);

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
                <h3>Latest Shoes {items?.task?.length} pieces </h3>
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
                  Sort By
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Price: High-Low
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Price: Low-High
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className="row">
            {items?.task?.map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4 pointer "
                key={item._id}
                onClick={() => dispatchSingle(item._id)}
              >
                <div className="card w-100 cardShadow urbanist">
                  <img src={item.image} className="card-img-top" />
                  <div className="card-body">
                    <h6 className="card-title">{item.title} </h6>
                    <p className="card-text footerTextColorGray">{item.for}</p>
                    <p className="card-text footerTextColorGray">
                      ${item.price}
                    </p>
                    <p className="card-text text- footerTextColorGray">
                      {item.sale}
                    </p>
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

export default LatestShoes;
