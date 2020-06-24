import React, { useReducer } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Balance from "./Components/Balance";
import globalContext from "./Context/globalContext";
import { reducer } from "./Reducer/reducer";

const initialState = {
  transactions: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ state, stateDispatch: dispatch }}>
      <Balance />
    </globalContext.Provider>
  );
};

export default App;
