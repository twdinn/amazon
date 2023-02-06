import CART_ADD_ITEM from "../constants/cartConstants";

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
