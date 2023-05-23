import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

// Adds URL to the database
function* postUrl(action) {
  console.log("action.payload:", action.payload);
  try {
    yield axios.post("/api/url", { videoUrl: action.payload });
    console.log("RES:");
    yield put({ type: "SAGA/GET_URLS" }); // run the getURL saga
  } catch (error) {
    console.log("User post request failed", error);
  }
}

// Get list of URLs from the database
function* getUrl(action) {
  console.log("getUrl err:");
  try {
    yield axios.get("/api/url");
    console.log("test");
    console.log("response.data:", response.data);
    yield put({
      type: "REDUX/GET_URLS",
      payload: response.data,
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
