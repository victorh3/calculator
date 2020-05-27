import React from "react";
import PropTypes from "prop-types";
import "./Components.scss";
import Block from "./Block";

const propTypes = {
  inputValue: PropTypes.string.isRequired,
};

type Props = {
  inputValue: string;
};

// Defined in env file so that it can be changed at the root and defined once since other component needs it. If not defined, default to 2 as requested.
const multiplier = process.env.REACT_APP_MULTIPLIER || "1";

// Component that displays N number of block determined by input value times multipler.
const Multiplier: React.SFC<Props> = ({ inputValue }) => {
  const itemsToRender = parseInt(inputValue) * parseInt(multiplier);

  return (
    <div className="Multiplier">
      <div className="Multiplier__Main">
        {inputValue.length >= 1 &&
          new Array(itemsToRender)
            .fill("item")
            .map((child, index) => <Block key={`.${index}`} index={index} />)}
      </div>
    </div>
  );
};

Multiplier.propTypes = propTypes;

export default Multiplier;
