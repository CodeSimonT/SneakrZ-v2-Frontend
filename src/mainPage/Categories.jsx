import React from "react";
import { categories } from "../constants/index";
import { adidas } from "../assets/icons/icons.js";
import { styling } from "../../style/style";

const Categories = () => {
  return (
    <section className="py-5">
      <div className="row w-100">
        {categories.map((item) => (
          <div
            key={item.id}
            className={`${styling.flexCenter} p-15 col-6 col-lg-3`}
          >
            <img src={item.image} alt="" className="imageSize" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
