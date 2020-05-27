import React from "react";
import PropTypes from "prop-types";
import "./Components.scss";

const propTypes = {
  index: PropTypes.number.isRequired,
};

type Props = {
  index: number;
};

// Component to represent individual square inside the window (Multiplier) view
// Even rows have a darker background
const Block: React.SFC<Props> = (props) => {
  const { index } = props;
  return (
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
};

Block.propTypes = propTypes;

export default Block;
