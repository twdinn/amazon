import { ADD_TO_ORDER } from "../constants/orderConstants";
import { v4 as uuidv4 } from "uuid";

const initialCartState = [];

const orderReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return [...state, { ...action.payload, id: uuidv4() }];
    default:
      return state;
  }
};

export default orderReducer;
