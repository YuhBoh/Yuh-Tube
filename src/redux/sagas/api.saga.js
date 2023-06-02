import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* postApi (action) {
  try{
    yield axios.post("")
  }
}

function ApiSaga() {
  yield takeLatest('SAGA/ADD_API', postApi)
}

export default ApiSaga;