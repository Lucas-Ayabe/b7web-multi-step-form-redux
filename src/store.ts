import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/form-reducer";

const store = configureStore({
    reducer: formReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
