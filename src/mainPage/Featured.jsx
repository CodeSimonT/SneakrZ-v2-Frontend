import React from "react";
import { featured } from "../constants/index";
const Featured = () => {
  return (
    <>
      <section className="container-fluid py-5">
        <div>
          <h1 className="urbanistBold featuredHeading bold">
            Featured Footware
          </h1>
        </div>
        <div className="row">
          {featured.map((item) => (
            <div className="col-12 col-lg-4 mb-5 " key={item.id}>
              <div className="card w-100 urbanist shadowD">
                <div className="w-100">
                  <img
                    src={item.image}
                    className="card-img-top imgS"
                    alt={item.image}
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">{item.content}</p>
                  <button className="buttonStyle">Shop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Featured;
