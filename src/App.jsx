import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  MainPage,
  NotFound,
  // featured
  BestSellers,
  LatestShoes,
  NewArrivals,
  //
  AirForce1,
  AirJordan1,
  AirMax,
  //
  NewForMen,
  //
  NewForWomen,

  // men
  MenShoes,

  // women
  WomenShoes,

  // sales
  ShopAllSales,
  FourSale,
  ThreeSale,
  TwoSale,
  //
  MenSale,
  //
  WomenSale,
  Login,
  SignUp,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* main page */}
          <Route path="/" element={<MainPage />}></Route>

          {/* new & featured */}
          {/* feature */}
          <Route path="/BestSellers" element={<BestSellers />}></Route>
          <Route path="/LatestShoes" element={<LatestShoes />}></Route>
          <Route path="/NewArrivals" element={<NewArrivals />}></Route>
          {/* shop icons */}
          <Route path="/AirForce1" element={<AirForce1 />}></Route>
          <Route path="/AirJordan1" element={<AirJordan1 />}></Route>
          <Route path="/AirMax" element={<AirMax />}></Route>
          {/* new for men */}
          <Route path="/NewForMen" element={<NewForMen />}></Route>
          {/* for women */}
          <Route path="/NewForWomen" element={<NewForWomen />}></Route>

          {/* men */}
          <Route path="/MenShoes" element={<MenShoes />}></Route>

          {/* women */}
          <Route path="/WomenShoes" element={<WomenShoes />}></Route>

          {/* for Sales */}
          {/* featured */}
          <Route path="/ShopAllSales" element={<ShopAllSales />}></Route>
          <Route path="/FourSale" element={<FourSale />}></Route>
          <Route path="/ThreeSale" element={<ThreeSale />}></Route>
          <Route path="/TwoSale" element={<TwoSale />}></Route>
          {/* men sale */}
          <Route path="/MenSale" element={<MenSale />}></Route>
          {/* women sale */}
          <Route path="/WomenSale" element={<WomenSale />}></Route>
          {/* login */}
          <Route path="/Login" element={<Login />}></Route>
          {/* signup */}
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
