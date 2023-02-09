import {
  ADD_ITEM_CART,
  REMOVE_ITEM_FROM_CART,
  EMPTY_CART,
} from "../constants/cartConstants";
import { v4 as uuidv4 } from "uuid";

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      return [...state, { ...action.payload, id: uuidv4() }];
    case REMOVE_ITEM_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case EMPTY_CART:
      return (state = initialCartState);
    default:
      return state;
  }
};

export default cartReducer;
