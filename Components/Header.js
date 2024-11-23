import React from "react";
import "./Header.css" ;
import { BiSearch } from "react-icons/bi"; // Search Icon
import logo from "../../assets/versatile-corporate-identity-logo-pack_1150526-2773.jpg"
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <div className="header__search">
        <BiSearch className="header__search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="header__search-input"
        />
      </div>
    </header>
  );
};

export default Header;