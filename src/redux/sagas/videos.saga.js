import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

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
    // console.log("response.data:", theVideos); WORKS

    yield put({
      type: "REDUX/GET_URLS",
      payload: theVideos,
    });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* deleteVideos(action) {
  //Since we had id in VideoItem. It will come as action.
  try {
    yield axios.delete(`/api/videos/${action.payload}`);
  } catch (error) {
    console.log("User delete request failed", error);
  }
}

function* postVideosSaga() {
  yield takeLatest("SAGA/ADD_URL", postVideos),
  yield takeLatest("SAGA/GET_URLS", getVideos),
  yield takeLatest("SAGA/DELETE_VIDEOS", deleteVideos)
}

export default postVideosSaga;
