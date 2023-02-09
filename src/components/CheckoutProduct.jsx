import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../actions/cartActions";
import PropTypes from "prop-types";

const CheckoutProduct = ({ id, image, name, price, rating, hideButton }) => {
  const dispatch = useDispatch();

  // dispatch removeItemFromCart action to remove an item from the cart
  const removeItemHandler = (itemId) => {
    dispatch(removeItemFromCart({ id: itemId }));
  };

  return (
    <div className="checkoutProduct">
      {/* Product image */}
      <img className="checkoutProduct_image" src={image} alt={name} />
      <div className="checkoutProduct_info">
        {/* Product name */}
        <p className="checkoutProduct_name">{name}</p>

        {/* Product rating */}
        {/* Shows products rating with stars */}
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${id}-${i}`}>
                <FaStar />
              </p>
            ))}
        </div>

        {/* Product price */}
        <p className="checkoutProduct_price">
          <strong>${price.toFixed(2)}</strong>
        </p>

        {/* Remove button */}
        {!hideButton && (
          <button onClick={() => removeItemHandler(id)}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hideButton: PropTypes.bool,
};

CheckoutProduct.defaultProps = {
  hideButton: false,
};

export default CheckoutProduct;
