import React from "react";
import { Navbar, Footer } from "../mainPage";
import { Outlet } from "react-router-dom";
import { styling } from "../../style/style";
const Layout = () => {
  return (
    <>
      <div className={styling.flexCenter}>
        <div className="PageMinWidth">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
