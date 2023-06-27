import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styling } from "../../../../style/style.js";
import {
  fetchAllShoes,
  fetchSingleShoes,
} from "../../../redux/cart/getAllShoes.js";

const BestSellers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.data);

  const dispatchSingle = (id) => {
    console.log(id);
    dispatch(fetchSingleShoes({ id, navigate }));
  };
  useEffect(() => {
    dispatch(fetchAllShoes());
  }, [dispatch]);

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <>
      <section className="py-5 my-5">
        <div className="container-fluid ">
          {/* number item && brands && sort */}
          <div className="d-flex justify-content-between w-100 mt-5 mb-3">
            {/* left content */}
            <div className="d-flex">
              {/* number List */}
              <div className={`${styling.flexCenter} me-2`}>
                <h3> Men's Shoes {items?.task?.length} pieces </h3>
              </div>
              {/* dropdown */}
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle fs-5"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Nike
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Adidas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NewBalance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Under Armour
                    </a>
                  </li>
                </ul>
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
                className="col-4 mb-4 pointer"
                key={item._id}
                onClick={() => dispatchSingle(item._id)}
              >
                <div className="card w-100">
                  <img src={item.image} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title} </h5>
                    <p className="card-text">{item.for}</p>
                    <p className="card-text">${item.price}</p>
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

export default BestSellers;
