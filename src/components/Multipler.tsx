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

const Multipler: FunctionComponent<Props> = ({ inputValue }) => {
  const itemsToRender = parseInt(inputValue);

  return (
    <div className="Multiplier">
      <div className="Multipler__Main">
        {inputValue.length >= 1 &&
          new Array(itemsToRender).fill("item").map((child, index) => (
            <div
              key={`.${index}`}
              className={`Multipler__Block ${
                (index + 1) % 2 === 0
                  ? "Multipler__Block--even"
                  : "Multipler__Block--odd"
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

// Multipler.propTypes = propTypes;
// Multipler.defaultProps = defaultProps;

export default Multipler;
