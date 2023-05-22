import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { useDispatch } from "react-redux";

function* getUrl(action) {
  const dispatch = useDispatch();
  console.log("action.payload:", action.payload);
  try {
    const videos = yield axios.get("/api/url");
    console.log('response.data:', response.data);
    yield dispatch({
      type: "REDUX/GET_URLS",
      payload: response.data
    });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* getUrlSaga() {
  yield takeLatest('SAGA/GET_URLS', getUrl)
}

export default getUrlSaga;