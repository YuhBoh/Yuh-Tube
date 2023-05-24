import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

// Adds URL to the database. Will do round trip but will not return anything.
function* postUrl(action) {
  // console.log("action.payload:", action.payload); POST WORKS
  try {
    yield axios.post("/api/url", { videoUrl: action.payload });
    // console.log("RES:"); POST WORKS
    yield put({ type: "SAGA/GET_URLS" }); // run the getURL saga
  } catch (error) {
    console.log("User post request failed", error);
  }
}

// Get list of URLs from the database
function* getUrl() {
  try {
    const response = yield axios.get("/api/url");
    const theUrls = response.data;
    console.log("response.data:", theUrls);

    yield put({
      type: "REDUX/GET_URLS",
      payload: theUrls,
    });

  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* postUrlSaga() {
  yield takeLatest("SAGA/ADD_URL", postUrl),
  yield takeLatest("SAGA/GET_URLS", getUrl);
}

export default postUrlSaga;
