import React, { useEffect } from "react";

import {
  S1,
  S2,
  S3,
  S4,
  S6,
  S7,
  S8,
  S9,
  S10,
  S11,
  S12,
  S13,
  S14,
  S15,
} from "../assets/images/index";

function Slides() {
  useEffect(() => {
    var splide = new Splide("#slides", {
      perPage: 5,
      gap: "2rem",
      type: "loop",
      autoscroll: { speed: 1 },
      rewind: true,
      pagination: false,
      focus: "center",
      breakpoints: {
        820: { perPage: 3 },
        400: { perPage: 1 },
      },
    });
    splide.mount();
  }, []);

  return (
    <div className="splide my-5" id="slides">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={S1} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S2} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S3} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S4} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S6} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S7} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S8} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S9} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S10} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S11} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S12} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S13} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S14} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S15} className="img-fluid imageSplide" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Slides;
