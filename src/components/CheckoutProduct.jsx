import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { removeItemFromCart } from "../actions/cartActions";

function CheckoutProduct({ id, image, name, price, rating }) {
  const dispatch = useDispatch();

  const removeItemHandler = (itemId) => {
    dispatch(removeItemFromCart({ id: itemId }));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt={name} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{name}</p>
        <p className="checkoutProduct_price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${id}-${i}`}>
                <FaStar />
              </p>
            ))}
        </div>
        <button onClick={() => removeItemHandler(id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
