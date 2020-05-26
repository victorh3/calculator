import React, { FunctionComponent } from "react";
import "./Layout.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className="Footer">
      <h2 className="Footer__Title">
        <span className="Footer__Title--mobile">F</span>
        <span className="Footer__Title--desktop">Footer</span>
      </h2>
    </footer>
  );
};

export default Footer;
