import React from "react";
import { Hero, Categories, JustIn, ShoesOne, Featured } from "../mainPage";
import { fetchAllShoes } from "../redux/cart/getAllShoes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
      <ShoesOne />
      <Featured />
    </>
  );
};

export default MainPage;
