import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { musicSlice } from "./musicSlice";
import { allSagas } from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(sagaMiddleware);

export const store = configureStore({
  reducer: { musicSlice: musicSlice },
  middleware: middleware,
});
sagaMiddleware.run(allSagas);
