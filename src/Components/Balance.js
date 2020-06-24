import React, { useContext } from "react";
import "../css/main.css";
import History from "../Components/History";
import globalContext from "../Context/globalContext";

const Balance = () => {
  let { state } = useContext(globalContext);
  const amount = state.transactions.map((transaction) => transaction.amount);
  const totalAmount = amount.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="container-main">
      <div>
        <h2 className="text-center p-4">Expense Tracker</h2>
        <h5>
          YOUR BALANCE <br />
          <span className="font-weight-bold">${totalAmount}</span>
        </h5>
      </div>
      <div className="expense m-2 p-2">
        <h5 className="text-center">
          INCOME
          <br />{" "}
          <span className="text-success font-weight-bold">${income}</span>
        </h5>
        <span className="separator"></span>
        <h5 className="text-center">
          EXPENSE <br />{" "}
          <span className="text-danger font-weight-bold">${expense}</span>
        </h5>
      </div>
      <History />
    </div>
  );
};

export default Balance;
