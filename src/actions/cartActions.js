import {
  CART_ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";

export const addToCart = (item) => ({
  type: CART_ADD_ITEM,
  payload: {
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    rating: item.rating,
  },
});

export function removeItemFromCart(item) {
  return { type: REMOVE_ITEM_FROM_CART, payload: item };
}
