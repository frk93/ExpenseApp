import React from "react";
import "../css/main.css";

const Transaction = () => {
  return (
    <div className="m-2">
      <form>
        <div className="form-group">
          <h6 for="Text">Email text</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
          />
        </div>
        <div className="form-group">
          <h6 for="amount">
            Enter amount <br />
            <span>(Negative - expense, positive - income</span>
          </h6>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
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
