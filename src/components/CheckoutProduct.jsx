import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function CheckoutProduct({ id, image, name, price, rating }) {
  const key = uuidv4();
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
              <p key={key}>
                <FaStar />
              </p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
