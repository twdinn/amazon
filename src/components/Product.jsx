import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Product = ({ id, name, image, price, rating }) => {
  const key = uuidv4();
  const dispatch = useDispatch();

  const addItem = () => {
    try {
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
      throw new Error("Error adding item to cart: ", error);
    }
  };
  return (
    <div className="product" onClick={addItem}>
      <img src={image} alt="{name}" />
      <div className="product_info">
        <p>{name}</p>

        <div className="product_rating">
          {Array.from({ length: rating }, (_, i) => (
            <div key={`${key}-${i}`}>
              <FaStar />
            </div>
          ))}
        </div>
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
