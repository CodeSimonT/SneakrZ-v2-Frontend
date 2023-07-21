import React from "react";
<<<<<<< Updated upstream
import { Hero, Categories, JustIn, Featured, Slides } from "../mainPage";
import { fetchAllShoes } from "../redux/cart/getAllShoes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
=======
import {
  Hero,
  Categories,
  JustIn,
  Featured,
  Slides,
  CashOnDelivery,
} from "../mainPage";

>>>>>>> Stashed changes
const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShoes());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Categories />
      <JustIn />
      <Slides />
      <Featured />
      <CashOnDelivery />
    </>
  );
};

export default MainPage;
