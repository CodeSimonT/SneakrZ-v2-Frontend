import React from "react";
import { justInImage } from "../assets/images";
const JustIn = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="w-100 justInContainer ">
          {/* overlay */}
          <div className="justInOverlay" />
          {/* content container */}
          <div className="justInT text-center">
            <h1 className="Staatliches bold heroHeadingStyle justInT text-white">
              ALWAYS ICONIC
            </h1>
            <p className="urbanist justInT text-white">
              Timeless style meets unmatched quality at Always Iconic Shoes.
              Discover our exquisite collection of elegant and sophisticated
              footwear, crafted with precision and attention to detail. Step
              into iconic fashion today.
            </p>
            <button className="buttonStyle urbanist">Shop Now!</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JustIn;
