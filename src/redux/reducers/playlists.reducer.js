const playlists = (state = [], action) => {
  switch (action.type) {
    case "REDUX/GET_PLAYLISTS":
      return action.payload;
    default:
      return state;
  }
};

export default playlists;
