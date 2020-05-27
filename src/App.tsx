import React, { FunctionComponent, useState } from "react";
import "./App.scss";
import { Input, Multiplier, Computed } from "./components";
import { Header, Body, Footer } from "./layout";

const App: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("3");

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
