import React, { FunctionComponent } from "react";
import "./Layout.scss";

const Header: FunctionComponent = () => {
  return (
    <header className="Header">
      <h2 className="Header__Title">
        {/* Shorthand to single letter in mobile view. */}
        <span className="Header__Title--mobile">H</span>
        <span className="Header__Title--desktop">Header</span>
      </h2>
    </header>
  );
};

export default Header;
