import React from "react";
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
      <Slides />
      <Featured />
    </>
  );
};

export default MainPage;
