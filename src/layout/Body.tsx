import React, { FunctionComponent } from "react";
import "./Layout.scss";

type Props = {
  children: React.ReactNode;
};

const Body: FunctionComponent<Props> = ({ children }) => {
  return <section className="Body">{children}</section>;
};

export default Body;
