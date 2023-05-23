import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

function* postUrl(action) {
  const dispatch = useDispatch();
  console.log('action.payload:', action.payload);
  try {
    const video = yield axios.post("/api/url", 
    {videoUrl: action.payload} )
    yield dispatch({ 
      type: 'SAGA/GET_URLS' })
  } catch (error) {
    console.log('User post request failed', error);
  }
}
//function for uploadSaga -- yield takeLatest
function* postUrlSaga() {
  yield takeLatest('SAGA/ADD_URL', postUrl)
}

export default postUrlSaga;