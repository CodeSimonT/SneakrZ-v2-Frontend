import { useState, useEffect } from "react";
import { NavLinks } from "../constants";
import { Link } from "react-router-dom";
import { bag, heart, menu, search, close } from "../assets/icons/icons.js";
import { styling } from "../../style/style.js";
// import navMobileView from "../middleware/navMobileView";

const Navbar = () => {
  // const [hover, setHover] = useState(false);
  return (
    <>
      <nav className="navbar position-relative urbanist">
        <div className="container-fluid d-flex justify-content-center">
          {/* grid container */}
          <div className="row containerF">
            {/* logo */}
            <div className="col-6 col-lg-3 d-flex align-items-center py-2">
              <a className="navbar-brand" href="/">
                <h4 className="urbanistBold mb-0">SneakrZ</h4>
              </a>
            </div>
            {/* navlinks */}
            <div className="col-6 d-flex align-items-center justify-content-end justify-content-lg-center ">
              <div>
                {/* logo and close menu */}
                <div className="d-flex">
                  {/* bag image*/}
                  <div
                    className={`${styling.flexCenter} pointer me-3 d-block d-lg-none`}
                  >
                    <img src={bag} alt="" className="navImgW" />
                  </div>
                  {/* mobile view button */}
                  <button
                    className="btn d-block d-lg-none pe-0 buttonDesign"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <img src={menu} alt="" className="navImgW" />
                  </button>
                </div>

                {/* nav web view */}
                <div className="d-none d-lg-block" id="navbarSupportedContent">
                  <ul className=" p-0 mb-0 d-flex w-100">
                    {NavLinks.map((item) => (
                      <li
                        key={item.id}
                        className="me-4 navLinkF pointer py-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.toggle}`}
                        aria-expanded="false"
                        aria-controls={item.toggle}
                      >
                        {item.title}
                      </li>
                    ))}
                    <li className={`me-4 navLinkF  mb-0 ${styling.CenterY} `}>
                      <Link
                        className="removeUnderline text-black  py-2"
                        to={"/MenShoes"}
                      >
                        Men
                      </Link>
                    </li>
                    <li className={`me-4 navLinkF ${styling.CenterY} `}>
                      <Link
                        className="removeUnderline text-black py-2"
                        to={"/WomenShoes"}
                      >
                        Women
                      </Link>
                    </li>
                    <li className={`navLinkF ${styling.CenterY} `}>
                      <Link
                        className="removeUnderline text-black py-2"
                        to={"/Login"}
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* nav mobile view */}
                <div
                  className="offcanvas offcanvas-end"
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-header">
                    {/* logo */}
                    <h4
                      className="offcanvas-title bold"
                      id="offcanvasWithBothOptionsLabel"
                    >
                      <a href="/"> SneakrZ</a>
                    </h4>
                    {/* button */}
                    <div data-bs-dismiss="offcanvas" aria-label="Close">
                      <img src={close} alt="" className="navImgW" />
                    </div>
                  </div>
                  {/* content */}
                  <div className="offcanvas-body">
                    {/* accordion container */}
                    <div
                      className="accordion accordion-flush "
                      id="accordionFlushExample "
                    >
                      {/* featured and sales (accordion) */}
                      {NavLinks.map((item) => (
                        <div
                          className="accordion-item accordionRemoveB"
                          key={item.id}
                        >
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${item.toggel1}`}
                              aria-expanded="false"
                              aria-controls={item.toggel1}
                            >
                              {item.title}
                            </button>
                          </h2>
                          <div
                            id={item.toggel1}
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            {/* accordion body */}
                            <div className="accordion-body accordionRemoveB">
                              <div
                                className="accordion accordion-flush accordionRemoveB "
                                id="subAccordion "
                              >
                                {item.Links.map((value, index) => (
                                  <div
                                    className="accordion-item accordionRemoveB"
                                    key={index}
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="flush-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${value.subtoggel}`}
                                        aria-expanded="false"
                                        aria-controls={value.subtoggel}
                                      >
                                        {value.subTitle}
                                      </button>
                                    </h2>
                                    <div
                                      id={value.subtoggel}
                                      className="accordion-collapse collapse"
                                      aria-labelledby="flush-headingOne"
                                      data-bs-parent="#accordionFlushExample"
                                    >
                                      <div className="accordion-body">
                                        <div
                                          className="accordion accordion-flush "
                                          id="subAccordion "
                                        >
                                          {value.subLinks.map((item, index) => (
                                            <div
                                              className="py-3 px-3 ms-1"
                                              key={index}
                                              data-bs-dismiss="offcanvas"
                                              aria-label="Close"
                                            >
                                              <Link
                                                to={item.link}
                                                className="text-black"
                                              >
                                                {item.hubTitle}
                                              </Link>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* men */}
                      <div
                        className="py-3 px-3 ms-1"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link to={"/MenShoes"} className="text-black">
                          Men
                        </Link>
                      </div>
                      {/* women */}
                      <div
                        className="py-3 px-3 ms-1"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link to={"/WomenShoes"} className="text-black">
                          Women
                        </Link>
                      </div>
                      {/* login */}
                      <div
                        className="py-3 px-3 ms-1"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link to={"/Login"} className="text-black">
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* search bar */}
            <div className="col-12 col-lg-3 mt-2 mt-lg-0 d-flex align-items-center justify-content-end ">
              <form
                className="d-flex align-items-center justify-content-center w-100"
                role="search"
              >
                <div
                  className={`${styling.flexCenter} backColorGray me-0 me-lg-4 rounded-pill w-100`}
                >
                  <div
                    className={`${styling.flexCenter} searchHover rounded-circle p-2 me-1 pointer`}
                  >
                    <img src={search} alt="" className="navImgW" />
                  </div>
                  <input
                    className="navBorderStyle navSearchResposive"
                    placeholder="Search"
                  ></input>
                </div>
                {/* heart */}
                <div
                  className={`${styling.flexCenter} me-3 pointer d-none d-lg-block`}
                >
                  <img src={heart} alt="" className="navImgW" />
                </div>
                {/* bag */}
                <div
                  className={`${styling.flexCenter} pointer d-none d-lg-block`}
                >
                  <img src={bag} alt="" className="navImgW" />
                </div>
              </form>
            </div>
          </div>
          {/* collapse web view*/}
          <div className="d-none d-lg-block">
            {NavLinks.map((item) => (
              <div
                key={item.id}
                className="collapse collapseW"
                id={item.toggle}
              >
                {/* grid container */}
                <div className="row">
                  {item.Links.map((item, index) => (
                    <div className="col" key={index}>
                      <p>{item.subTitle}</p>
                      <ul>
                        {/* sublink container */}
                        {item.subLinks.map((value, index) => (
                          <li key={index} className="mb-1">
                            <Link
                              to={value.link}
                              className="removeUnderline navbarSubTextColor"
                            >
                              {value.hubTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
