import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { v4 as uuidv4 } from "uuid";

const Product = ({ id, name, image, price, rating }) => {
  const key = uuidv4();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        price,
        rating,
      })
    );
  };
  return (
    <div className="product" onClick={addItem}>
      <img src={image} alt="{name}" />
      <div className="product_info">
        <p>{name}</p>

        <div className="product_rating">
          {Array.from({ length: rating }, (_, i) => (
            <div key={key}>
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

export default Product;
