import React from "react";
import "../css/main.css";
import History from "../Components/History";

const Balance = () => {
  return (
    <div className="container-main">
      <div>
        <h2 className="text-center p-4">Expense Tracker</h2>
        <h5>
          YOUR BALANCE <br />
          <span>$460</span>
        </h5>
      </div>
      <div className="expense text-center m-2 p-2">
        <h5>
          INCOME <br /> $100{" "}
        </h5>
        <span className="separator"></span>
        <h5>
          EXPENSE <br /> $100{" "}
        </h5>
      </div>
      <History />
    </div>
  );
};

export default Balance;
