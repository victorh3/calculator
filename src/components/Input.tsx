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
    const numberPattern = /\d+/g;
    const sanitizedString: string[] | null = value.match(numberPattern) || [""];
    console.log(sanitizedString);
    setInputValue(sanitizedString.join(""));
  };

  const elementId = "number-input";

  return (
    <div className="Input">
      <label htmlFor={elementId}>Enter a Number</label>
      <input
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
