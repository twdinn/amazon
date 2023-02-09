import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Product = ({ id, name, image, price, rating }) => {
  // Generate a unique key for each product item
  const key = uuidv4();

  const dispatch = useDispatch();
  // Function to handle the click event and add the product to the cart
  const addItem = () => {
    try {
      // Dispatch the action to add the product to the cart
      dispatch(
        addToCart({
          id,
          name,
          image,
          price,
          rating,
        })
      );
    } catch (error) {
      // Throw an error if there was a problem adding the product to the cart
      throw new Error("Error adding item to cart: ", error);
    }
  };
  return (
    <div className="product" onClick={addItem}>
      {/* Product image */}
      <img src={image} alt="{name}" />

      {/* Product name */}
      <div className="product_info">
        <p>{name}</p>

        {/* Product rating */}
        {/* Shows products rating with stars */}
        <div className="product_rating">
          {Array.from({ length: rating }, (_, i) => (
            <div key={`${key}-${i}`}>
              <FaStar />
            </div>
          ))}
        </div>

        {/* Product price */}
        <p className="product_price">
          <strong>${price.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Product;
