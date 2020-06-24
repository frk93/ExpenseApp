import React, { useContext } from "react";
import "../css/main.css";
import Transaction from "./Transaction";
import globalContext from "../Context/globalContext";

const History = () => {
  let { state, stateDispatch } = useContext(globalContext);

  const deletelist = (id) => {
    stateDispatch({
      type: "delete_transaction",
      payload: id,
    });
  };

  return (
    <div className="mt-2">
      <h4>History</h4>
      <ul className="trans-list list-unstyled">
        {state.transactions
          ? state.transactions.map((val) => {
              return (
                <li
                  key={val.id}
                  className={`delete ${val.amount < 0 ? "minus" : "plus"}`}
                  onClick={() => {
                    deletelist(val.id);
                  }}
                >
                  <span>{val.name}</span>
                  <span>${val.amount}</span>
                </li>
              );
            })
          : "No Transaction"}
      </ul>
      <Transaction />
    </div>
  );
};

export default History;
