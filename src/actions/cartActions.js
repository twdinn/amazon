import CART_ADD_ITEM from "../constants/cartConstants";

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
