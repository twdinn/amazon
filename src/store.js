import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducers";
import userReducer from "./reducers/userReducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
