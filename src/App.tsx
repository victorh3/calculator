import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.scss";
import { Input, Multiplier } from "./components";
import { Header, Body, Footer } from "./layout";

const App: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("10");

  // useEfect hook to check/validate input
  // useEffect(() => {
  //   if (!inputValue) setInputValue("0");
  // }, [inputValue]);

  return (
    <div className="App">
      <Header />
      <Body>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Multiplier inputValue={inputValue} />
      </Body>
      <Footer />
    </div>
  );
};

export default App;
