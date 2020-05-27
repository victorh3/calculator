import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
};

type Props = {
  children: React.ReactNode;
};

const Body: React.FC<Props> = (props) => {
  const { children } = props;
  return <section className="Body">{children}</section>;
};

Body.propTypes = propTypes;

export default Body;
