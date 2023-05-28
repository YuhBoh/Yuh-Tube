import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// adds playlist to db. Will roundtrip but not return anything except "oks".
function* postPlaylist(action) {
  // console.log("action.payload:", action.payload); POST WORKS
  try {
    yield axios.post("/api/playlists/", { 
      name: action.payload});
    yield put({ type: "SAGA/GET_PLAYLISTS" });
  } catch (error) {
    console.log("Playlist post request failed", error);
  }
  // NEXT GO TO SERVER (Create playlists.router.js)
}

// Get list of playlists from database and send to Redux for render
function* getPlaylists() {
  try {
    const response = yield axios.get("/api/playlists");
    const thePlaylists = response.data
    // console.log("response.data:", response.data); WORKS

    yield put({
      type: "REDUX/GET_PLAYLISTS",
      payload: thePlaylists,
    });
  } 
  catch (error) {
    console.log("User get playlist request failed", error);
  }
}

function* playlistsSaga() {
  yield takeLatest("SAGA/ADD_PLAYLISTS", postPlaylist)
  // We heard SAGA/GET_PAYLISTS from VideoPlaylist.jsx.
  // Run function getPlaylists 👇
  yield takeLatest("SAGA/GET_PLAYLISTS", getPlaylists)
}

export default playlistsSaga;
// NOW GO ADD playlistsSaga TO root.saga.js