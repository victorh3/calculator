import React, { FunctionComponent } from "react";
import "./Components.scss";
// import PropTypes from "prop-types";

// const propTypes = {
//   inputValue: PropTypes.string,
//   setInputValue: PropTypes.func,
// };

// const defaultProps = {
//   inputValue: "0",
//   setInputValue: (): void => {
//     // do nothing
//   },
// };

type Props = {
  inputValue: string;
};

// Defined in env file so that it can be changed at the root and defined once since other component needs it. If not defined, default to 2 as requested..
const multiplier = process.env.REACT_APP_MULTIPLIER || "2";

const Computed: FunctionComponent<Props> = ({ inputValue }) => {
  const itemsToRender = parseInt(inputValue) * parseInt(multiplier);

  return (
    // Conditionally render the Input value times the multiplier as a number, otherwise don't render anything if blank.
    <div className="Computed">{inputValue !== "" ? itemsToRender : null}</div>
  );
};

// Computed.propTypes = propTypes;
// Computed.defaultProps = defaultProps;

export default Computed;
