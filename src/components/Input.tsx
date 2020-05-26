import React, { FunctionComponent } from "react";
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
  setInputValue: (inputValue: string) => void;
};

const Input: FunctionComponent<Props> = ({ inputValue, setInputValue }) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setInputValue(value);
  };

  const elementId = "number-input";

  return (
    <div className="Input">
      <label htmlFor={elementId}>Enter a Number</label>
      <input
        id={elementId}
        className="Input__Field"
        type="number"
        min="0"
        placeholder="Enter number"
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
};

// Input.propTypes = propTypes;
// Input.defaultProps = defaultProps;

export default Input;
