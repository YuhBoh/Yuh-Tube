import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Get list of playlists from database and send to Redux for render
function* getSearch(action) {
  // console.log('ACTIONPAYLOAD:', action.payload); WORKS
  try {
    const data = yield axios.get(`/api/search?search=${action.payload}`);
    //GO TO SEARCH.ROUTER.JS
    yield put({
      type: "REDUX/GET_SEARCH", 
      payload:{data: data}
    });
  } catch (error) {
    console.log("User get playlist request failed", error);
  }
}

function* searchSaga() {
  // Run function getPlaylists 👇
  yield takeLatest("SAGA/GET_SEARCH", getSearch);

}

export default searchSaga;