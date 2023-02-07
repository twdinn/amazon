import {
  CART_ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";
import { v4 as uuidv4 } from "uuid";

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, { ...action.payload, id: uuidv4() }];
    case REMOVE_ITEM_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
