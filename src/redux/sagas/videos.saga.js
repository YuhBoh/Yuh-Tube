import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

// Adds URL to the database. Will do round trip but will not return anything.
function* postVideos(action) {
  // console.log("action.payload:", action.payload); POST WORKS
  try {
    yield axios.post("/api/videos", { videoUrl: action.payload });
    // console.log("RES:"); POST WORKS
    yield put({ type: "SAGA/GET_URLS" }); // run the getURL saga
  } catch (error) {
    console.log("User post request failed", error);
  }
}

// Get list of URLs from the database
function* getVideos() {
  try {
    const response = yield axios.get("/api/videos");
    const theVideos = response.data;
    console.log("response.data:", theVideos);

    yield put({
      type: "REDUX/GET_URLS",
      payload: theVideos,
    });

  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* postVideosSaga() {
  yield takeLatest("SAGA/ADD_URL", postVideos),
  yield takeLatest("SAGA/GET_URLS", getVideos);
}

export default postVideosSaga;
