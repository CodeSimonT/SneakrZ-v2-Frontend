import React from "react";
import { styling } from "../../style/style";
import { FooterLinks, FooterSubLinks } from "../constants/index";
import { socials } from "../constants/index";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footerStyle text-white urbanist">
        <div className="container-fluid">
          <div className="row">
            {/* col 1 */}
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="d-flex mt-5">
                {socials.map((item, index) => (
                  <div
                    className={`${styling.flexCenter} socialStyle me-2 pointer`}
                    key={index}
                  >
                    <a href={item.link}>
                      <img
                        src={item.image}
                        alt="image"
                        className="footerSocialS"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* col 2 */}
            <div className="col-12 col-sm-6 col-lg-3 mt-0 mt-sm-5 textGray">
              <ul className="p-0">
                {FooterLinks.map((item) => (
                  <li key={item.id} className="bold mb-1 pointer">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* col 3*/}
            <div className="col-12 col-lg-6">
              {/* grid container */}
              <div className="row">
                {FooterSubLinks.map((item) => (
                  <div
                    className="col-12 col-sm-6 mt-0 mt-lg-5 textGray"
                    key={item.id}
                  >
                    <h6>{item.title} </h6>
                    <ul>
                      {item.Links.map((item) => (
                        <li
                          key={item.id}
                          className="footerTextColorGray pointer"
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center pt-4 textGray">
            © 2023 Nike, Inc. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
