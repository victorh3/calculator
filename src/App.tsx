import React, { FunctionComponent, useState } from "react";
import "./App.scss";
import { Input, Multiplier, Computed } from "./components";
import { Header, Body, Footer } from "./layout";

const App: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("3");

  // useEfect hook to check/validate input
  // useEffect(() => {
  //   const multiplier = 2;
  //   const inputValueNumber = parseInt(inputValue) * multiplier;
  //   setInputValue(inputValueNumber.toString());
  // }, [inputValue]);

  return (
    <div className="App">
      <Header />
      <Body>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Multiplier inputValue={inputValue} />
        <Computed inputValue={inputValue} />
      </Body>
      <Footer />
    </div>
  );
};

export default App;
