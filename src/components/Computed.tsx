import React, { FunctionComponent } from "react";
import "./Components.scss";
// import PropTypes from "prop-types";

// const propTypes = {
//   inputValue: PropTypes.string,
//   setInputValue: PropTypes.func,
// };

// const defaultProps = {
//   inputValue: 0,
//   setInputValue: (): void => { },
// };

type Props = {
  inputValue: string;
};

const multiplier = process.env.REACT_APP_MULTIPLIER || "1";

const Computed: FunctionComponent<Props> = ({ inputValue }) => {
  const itemsToRender = parseInt(inputValue) * parseInt(multiplier);

  return <div className="Computed">{itemsToRender}</div>;
};

// Computed.propTypes = propTypes;
// Computed.defaultProps = defaultProps;

export default Computed;
