import { useEffect, useState } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { emptyCart } from "../actions/cartActions";
import { addToOrder } from "../actions/orderActions";

const PaymentPage = () => {
  // State to check if this is the first render
  const [firstRender, setFirstRender] = useState(true);

  // Getting the user information from redux store
  const user = useSelector((state) => state.user);

  // Getting the cart information from redux store
  const cart = useSelector((state) => state.cart);

  // Dispatch hook for dispatching actions to redux store
  const dispatch = useDispatch();

  // Navigate hook for navigation
  const navigate = useNavigate();

  // UseEffect hook to display an alert with a credit card number for testing
  useEffect(() => {
    if (firstRender) {
      alert("Use Credit Card Number 4242 4242 4242 4242");
      setFirstRender(false);
    }
  }, [firstRender]);

  // Stripe publishable key for testing
  const pk_test_YOUR_PUBLISHABLE_KEY =
    "pk_test_51MYmjxIY45Y8uAuQcyYECYORMhKxm4RycjzITkmbLKDqxoOFHwdboFcsJHUIxLM5Ly7LHEGtxOLWXPVVnFrsQl0i00mnk2OBqg";

  // Function to handle the order and dispatch an action to add items to order page
  const handleOrder = (cart) => {
    try {
      cart.forEach((item) => {
        dispatch(
          addToOrder({
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            rating: item.rating,
          })
        );
      });
    } catch (error) {
      throw new Error("Error adding item to cart: ", error);
    }
  };

  // Function to handle the token returned by Stripe API and dispatch actions to empty cart and navigate to order page
  const handleToken = (token) => {
    handleOrder(cart);
    dispatch(emptyCart(cart));
    navigate("/orders");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        {/* Displaying the number of items in cart */}
        <h1>
          Checkout (<Link to="/checkout"> {cart.length} items</Link>)
        </h1>

        {/* Delivery Address  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>{user.street}</p>
            <p>
              {user.city}, {user.prov}
            </p>
          </div>
        </div>

        {/* Items in Cart  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Stripe Payment  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <div className="payment_priceContainer">
              <StripeCheckout
                stripeKey={pk_test_YOUR_PUBLISHABLE_KEY}
                token={handleToken}
                amount={
                  cart.reduce((amount, item) => item.price + amount, 0) * 100
                }
                name="Amazon Clone"
                billingAddress
                shippingAddress
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
