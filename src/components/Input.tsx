import React, { FunctionComponent } from "react";
import { DebounceInput } from "react-debounce-input";
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

// Use a debounced input so that the onChange function is called at least 1 second AFTER the user is done typing. Increase performance. Can easily be swapped with and HTML input element.
const Input: FunctionComponent<Props> = ({ inputValue, setInputValue }) => {
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

// Input.propTypes = propTypes;
// Input.defaultProps = defaultProps;

export default Input;
