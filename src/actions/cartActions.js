import {
  ADD_ITEM_CART,
  REMOVE_ITEM_FROM_CART,
  EMPTY_CART,
} from "../constants/cartConstants";

export const addToCart = (item) => ({
  type: ADD_ITEM_CART,
  payload: {
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    rating: item.rating,
  },
});

export const removeItemFromCart = (item) => {
  return { type: REMOVE_ITEM_FROM_CART, payload: item };
};

export const emptyCart = () => {
  return { type: EMPTY_CART };
};
