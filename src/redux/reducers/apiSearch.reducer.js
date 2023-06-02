const apiSearch = (state = [], action) => {
  switch (action.type) {
    case "REDUX/GET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export default apiSearch;
