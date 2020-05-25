import React, { FunctionComponent } from "react";
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
  setInputValue: (inputValue: string) => void;
};

const Input: FunctionComponent<Props> = ({ inputValue, setInputValue }) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setInputValue(value);
  };

  return (
    // <Form.Group controlId="calculatorInputNumber" className="Input">
    //   <Form.Label>Enter a number</Form.Label>
    //   <Form.Control
    //     type="number"
    //     min="0"
    //     placeholder="Enter number"
    //     value={inputValue}
    //     onChange={handleOnChange}
    //   />
    //   <Form.Text className="text-muted">
    //     Limit is {Number.MAX_SAFE_INTEGER}
    //   </Form.Text>
    // </Form.Group>
    <div className="Input">
      <input
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
