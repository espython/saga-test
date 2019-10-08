const reducer = (state = { iput: "", tableDataSource: [] }, action) => {
  switch (action.type) {
    case "GET_INPUT":
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
