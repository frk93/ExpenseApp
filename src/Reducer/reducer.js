export const reducer = (state, action) => {
  if (action.type === "add_transaction") {
    return {
      ...state,
      transactions: [...state.transactions, action.payload],
    };
  }

  if (action.type === "delete_transaction") {
    return {
      ...state,
      transactions: state.transactions.filter(
        (transactions) => transactions.id !== action.payload
      ),
    };
  }
};
