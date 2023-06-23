import React from "react";
import { categories } from "../constants/index";
import { adidas } from "../assets/icons/icons.js";
const Categories = () => {
  return (
    <section>
      <img src={adidas} alt="" />
      {categories.map((item) => (
        <div key={item.id} className="bg-black categoriesItem p-1">
          <img src={item.image} alt="" className="w-100" />
        </div>
      ))}
    </section>
  );
};

export default Categories;
