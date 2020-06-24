import React, { useContext, useState } from "react";
import "../css/main.css";
import globalContext from "../Context/globalContext";

const Transaction = () => {
  const [text, setText] = useState(null);
  const [amount, setAmount] = useState(0);
  let consumeContext = useContext(globalContext);

  const getTransactions = (e) => {
    e.preventDefault();

    let transactionObj = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      name: text,
      amount: parseInt(amount),
    };

    consumeContext.stateDispatch({
      type: "add_transaction",
      payload: transactionObj,
    });
  };

  return (
    <div className="m-2">
      <form onSubmit={getTransactions}>
        <div className="form-group">
          <h6 htmlFor="Text">Email text</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h6 htmlFor="amount">
            Enter amount <br />
            <span>(Negative - expense, positive - income</span>
          </h6>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
