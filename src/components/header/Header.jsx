import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello Sir/Madam I am</h3>
        <h1>Mr.Manivannan M.E.,</h1>
        <h3 className="text-light">
          Assistant Professor & Front-end Developer
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
