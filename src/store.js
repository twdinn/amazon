import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducers";
import orderReducer from "./reducers/orderReducers";
import userReducer from "./reducers/userReducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
