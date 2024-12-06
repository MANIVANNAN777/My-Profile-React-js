import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Mr.J.Manivannan M.E.,</h1>
        <h3 className="text-light">
          Assistant Professor & Front-End-Developer
        </h3>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
