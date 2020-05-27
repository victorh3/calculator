import React, { FunctionComponent } from "react";
import "./Components.scss";
import Block from "./Block";
// import PropTypes from "prop-types";

// const propTypes = {
//   inputValue: PropTypes.string,
//   setInputValue: PropTypes.func,
// };

// const defaultProps = {
//   inputValue: 0,
//   setInputValue: (): void => {
//     // do nothing
//   },
// };

type Props = {
  inputValue: string;
};

// Defined in env file so that it can be changed at the root and defined once since other component needs it. If not defined, default to 2 as requested.
const multiplier = process.env.REACT_APP_MULTIPLIER || "1";

// Component that displays N number of block determined by input value times multipler.
const Multiplier: FunctionComponent<Props> = ({ inputValue }) => {
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

// Multiplier.propTypes = propTypes;
// Multiplier.defaultProps = defaultProps;

export default Multiplier;
