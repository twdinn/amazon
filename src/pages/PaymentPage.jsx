import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import CurrencyFormat from "react-currency-format";

function PaymentPage() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const handleSubmit = () => {};
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout"> {cart.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
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

        {/* Payment section - Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <div className="payment_priceContainer">
                <h3>
                  Order Total: $
                  {cart.reduce((amount, item) => item.price + amount, 0)}
                </h3>
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
