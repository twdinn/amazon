import { FaStar } from "react-icons/fa";

const Product = ({ id, name, image, price, rating }) => {
  return (
    <div className="product">
      <img src={image} alt="{name}" />
      <div className="product_info">
        <p>{name}</p>

        <div className="product_rating">
          {Array.from({ length: rating }, (_, i) => (
            <div key={i}>
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
