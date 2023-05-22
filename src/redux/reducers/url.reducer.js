const urlReducer = (state = [], action) => {
    switch (action.type) {
      case "REDUX/ADD_URL":
        return action.payload;
      case "REDUX/GET_URLS":
        return action.payload;
      default:
        return state;
    }
}

export default urlReducer;