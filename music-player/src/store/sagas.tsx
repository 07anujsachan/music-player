import { all } from "redux-saga/effects";
import { musicSagas } from "./musicSaga";

export function* allSagas() {
  yield all([...musicSagas]);
}
