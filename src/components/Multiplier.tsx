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

const Multiplier: FunctionComponent<Props> = ({ inputValue }) => {
  const itemsToRender = parseInt(inputValue) * parseInt(multiplier);

  return (
    <div className="Multiplier">
      <div className="Multiplier__Main">
        {inputValue.length >= 1 &&
          new Array(itemsToRender).fill("item").map((child, index) => (
            <div
              key={`.${index}`}
              className={`Multiplier__Block ${
                (index + 1) % 2 === 0
                  ? "Multiplier__Block--even"
                  : "Multiplier__Block--odd"
                }`}
            >
              {index + 1}
            </div>
          ))}
        {/* {new Array(itemsToRender).map((child, index) => (
        <div key={`.${index}`}>{index}</div>
      ))} */}
      </div>
    </div>
  );
};

// Multiplier.propTypes = propTypes;
// Multiplier.defaultProps = defaultProps;

export default Multiplier;
