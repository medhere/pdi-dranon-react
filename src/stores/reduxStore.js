import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
});

const reducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer,
});

export const persistedStore = persistStore(store);
