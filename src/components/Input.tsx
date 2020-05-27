import React from "react";
import PropTypes from "prop-types";
import { DebounceInput } from "react-debounce-input";

const propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

type Props = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

// Use a debounced input so that the onChange function is called at least 1 second AFTER the user is done typing. Increase performance. Can easily be swapped with and HTML input element.
const Input: React.SFC<Props> = ({ inputValue, setInputValue }) => {
  const elementId = "number-input";

  const handleOnChange = (e: { target: { value: string } }): void => {
    const value: string = e.target.value;
    // Sanitize input to ensure that there are only numeric values accepted.
    const numberPattern = /\d+/g;
    const sanitizedString: string[] | null = value.match(numberPattern) || [""];
    setInputValue(sanitizedString.join(""));
  };

  return (
    <div className="Input">
      <label htmlFor={elementId}>Enter a Number</label>
      <DebounceInput
        minLength={0}
        debounceTimeout={1000}
        className="Input__Field"
        id={elementId}
        min="0"
        onChange={handleOnChange}
        value={inputValue}
      />
    </div>
  );
};

Input.propTypes = propTypes;

export default Input;
