import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi"; // Search Icon
import logo from "../../assets/versatile-corporate-identity-logo-pack_1150526-2773.jpg";
import { movieActions } from "../../store/redux-store";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    navigate("/user");
    dispatch(movieActions.adminLogout());
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header__search">
        <BiSearch className="header__search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="header__search-input"
        />
      </div>
      <button className="bt" onClick={logoutHandler}>
        Log out
      </button>
    </header>
  );
};

export default Header;
