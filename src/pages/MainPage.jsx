import React from "react";
import { Hero, Categories, JustIn, Featured, Slides } from "../mainPage";

const MainPage = () => {
  return (
    <>
      <Hero />
      {/* <Categories /> */}
      <JustIn />
      <Slides />
      <Featured />
    </>
  );
};

export default MainPage;
