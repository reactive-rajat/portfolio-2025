import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo-light.svg";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Pixel Kaarigar Logo on Default Theme" />
      </Link>
    </header>
  );
};
