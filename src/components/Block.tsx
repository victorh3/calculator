import React, { FunctionComponent } from "react";
import "./Components.scss";
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
  index: number;
};

// Component to represent individual square inside the window (Multiplier) view
// Even rows have a darker background
const Block: FunctionComponent<Props> = ({ index }) => (
  <div
    className={`Multiplier__Block ${
      (index + 1) % 2 === 0
        ? "Multiplier__Block--even"
        : "Multiplier__Block--odd"
      }`}
  >
    {index + 1}
  </div>
);

export default Block;
