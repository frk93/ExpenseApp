import React from "react";
import Header from "./Components/Header";
import Blanace from "./Components/Balance";
import History from "./Components/History";
import Transaction from "./Components/Transaction";

const App = () => {
  return (
    <div>
      <Header />
      <Blanace />
      <History />
      <Transaction />
    </div>
  );
};

export default App;
