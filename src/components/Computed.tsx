import React from "react";
import PropTypes from "prop-types";
import "./Components.scss";

const propTypes = {
  inputValue: PropTypes.string.isRequired,
};

type Props = {
  inputValue: string;
};

// Defined in env file so that it can be changed at the root and defined once since other component needs it. If not defined, default to 2 as requested..
const multiplier = process.env.REACT_APP_MULTIPLIER || "2";

const Computed: React.SFC<Props> = (props) => {
  const { inputValue } = props;
  const itemsToRender = parseInt(inputValue) * parseInt(multiplier);

  return (
    // Conditionally render the Input value times the multiplier as a number, otherwise don't render anything if blank.
    <div className="Computed">{inputValue !== "" ? itemsToRender : null}</div>
  );
};

Computed.propTypes = propTypes;

export default Computed;
