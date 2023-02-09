import Header from "../components/Header";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  // Use the useSelector hook to access the state in the Redux store
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <div className="checkout">
        {/* Ad Image */}
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="./images/Amazon-Prime-Early-Access-Sale.jpeg"
            alt=""
          />

          {/* Display the customer's name and the shopping basket */}
          <div>
            <h3>Hello {user && user.name ? user.name : "Guest"}</h3>
            <h2 className="checkout_name">Your shopping Basket</h2>

            {/* Map over the items in the cart and render the CheckoutProduct component for each item */}
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

        {/* Render the Subtotal component */}
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
