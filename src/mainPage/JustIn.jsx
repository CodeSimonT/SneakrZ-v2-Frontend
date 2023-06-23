import React from "react";
import { justInImage } from "../assets/images";
const JustIn = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="w-100  justInContainer ">
          <div className="justInOverlay" />
          <div className="justInT text-center">
            <h1 className="Staatliches bold heroHeadingStyle  justInT">
              ALWAYS ICONIC
            </h1>
            <p className="urbanistBold justInT ">
              Indulge your feet in a symphony of comfort and style with our
              meticulously crafted shoe collection, designed to make every step
              a memorable experience.
            </p>
            <button className="buttonStyle urbanist">Shop Now!</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JustIn;
