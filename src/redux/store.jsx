import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reduce"
import creteSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";

const sagaMIddleware = creteSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMIddleware]
})

sagaMIddleware.run(rootSaga)