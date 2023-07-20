import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  MainPage,
  NotFound,
  // featured
  AllShoes,
  BestSellers,
  LatestShoes,
  NewArrivals,
  //
  Nike,
  Adidas,
  NewBalance,
  UnderArmour,
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
  Loginn,
  SignUp,
  //
  AddToCart,
} from "./pages";

import {
  SingleShoes,
  GetSingleShoesMen,
  GetSingleShoesWomen,
} from "./middleware";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* main page */}
          <Route path="/" element={<MainPage />}></Route>

          {/* new & featured */}
          {/* feature */}
          <Route path="/AllShoes" element={<AllShoes />}></Route>
          <Route path="/BestSellers" element={<BestSellers />}></Route>
          <Route path="/LatestShoes" element={<LatestShoes />}></Route>
          <Route path="/NewArrivals" element={<NewArrivals />}></Route>
          {/* shop icons */}
          <Route path="/Nike" element={<Nike />}></Route>
          <Route path="/Adidas" element={<Adidas />}></Route>
          <Route path="/NewBalance" element={<NewBalance />}></Route>
          <Route path="/UnderArmour" element={<UnderArmour />}></Route>
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
          <Route path="/Loginn" element={<Loginn />}></Route>
          {/* signup */}
          <Route path="/SignUp" element={<SignUp />}></Route>
          {/* add to cart */}
          <Route path="/AddToCart" element={<AddToCart />}></Route>

          {/* single shoes */}
          <Route path="/SingleShoes" element={<SingleShoes />}></Route>
          {/* GetSingleShoesMen */}
          <Route
            path="/GetSingleShoesMen"
            element={<GetSingleShoesMen />}
          ></Route>
          {/* GetSingleShoesWomen */}
          <Route
            path="/GetSingleShoesWomen"
            element={<GetSingleShoesWomen />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
