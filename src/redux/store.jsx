import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reduce"

export const store = configureStore({
    reducer: rootReducer
})