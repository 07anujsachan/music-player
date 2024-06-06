import { call, put, takeLatest } from "redux-saga/effects";
import { getMusicData } from "../api";

export const Actions = {
  getMusic: "get-music/",
};

function* getMusicSaga() {
  yield takeLatest(Actions.getMusic + "request", function* (action: any): any {
    try {
      yield put({
        type: Actions.getMusic + "pending",
        payload: {},
      });
      const apiResponse = yield call(() => getMusicData(action.payload));
      console.log(apiResponse);

      if (!apiResponse) {
        throw new Error(JSON.stringify(apiResponse));
      }
      yield put({
        type: Actions.getMusic + "fullfilled",
        payload: apiResponse.tracks.items,
      });
    } catch (error: any) {
      yield put({ type: Actions.getMusic + "rejected", payload: error });
    }
  });
}

export const musicSagas = [getMusicSaga()];
