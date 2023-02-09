import { ADD_TO_ORDER } from "../constants/orderConstants";

export const addToOrder = (item) => ({
  type: ADD_TO_ORDER,
  payload: {
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    rating: item.rating,
  },
});
