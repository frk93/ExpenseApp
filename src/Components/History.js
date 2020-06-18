import React from "react";
import "../css/main.css";
import Transaction from "./Transaction";

const History = () => {
  let transaction = [
    { name: "Bill", amount: +100 },
    { name: "Payment", amount: -44 },
    { name: "Contract", amount: -231 },
    { name: "Purchased", amount: +55 },
  ];
  return (
    <div className="mt-2">
      <h4>History</h4>
      <hr />
      <ul className="trans-list list-unstyled">
        {transaction.map((val) => {
          return (
            <li>
              <span>{val.name}</span>
              <span>{val.amount}</span>
            </li>
          );
        })}
      </ul>
      <Transaction />
    </div>
  );
};

export default History;
