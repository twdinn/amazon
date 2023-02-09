import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  // Allows navigation to a different URL using the `useNavigate` hook
  const navigate = useNavigate();

  // Access the state stored in the Redux store
  const cart = useSelector((state) => state.cart);

  // A function to navigate to the payment page when the "Proceed to Checkout" button is clicked
  const proceedToPay = () => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      {/* Display the subtotal calculated from the cart items */}
      <p>
        Subtotal ({cart.length} items):{" "}
        <strong>
          ${cart.reduce((amount, item) => item.price + amount, 0).toFixed(2)}
        </strong>
      </p>

      {/* Display the gift checkbox */}
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      {/* Trigger the `proceedToPay` function when the button is clicked */}
      <button onClick={proceedToPay}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
