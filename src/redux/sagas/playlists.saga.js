import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// adds playlist to db. Will roundtrip but not return anything except "oks".
function* postPlaylist(action) {
  // console.log("action.payload:", action.payload); POST WORKS (look in action)
  // console.log("playlist:", playlist); VARIABLE WORKS
  try {
    yield axios.post("/api/playlists", { playlist: action.payload });
  } catch (error) {
    console.log("Playlist post request failed", error);
  }
  // NEXT GO TO SERVER (Create playlists.router.js)
  
}

function* playlistsSaga() {
  yield takeLatest("SAGA/ADD_PLAYLIST", postPlaylist);
}

export default playlistsSaga;
// NOW GO ADD playlistsSaga TO root.saga.js