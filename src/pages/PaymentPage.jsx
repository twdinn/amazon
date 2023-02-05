// import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

// import CurrencyFormat from "react-currency-format";

function PaymentPage() {
  const handleSubmit = () => {};
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout"> items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            {/* <p>{user?.email}</p> */}
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          {/* <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div> */}
        </div>

        {/* Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              {/* <CardElement onChange={handleChange} /> */}

              <div className="payment_priceContainer">
                {/* <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
            
                  decimalScale={2}
                    value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                /> */}
                {/* <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span> */}
                <button>
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Errors */}
              {/* {error && <div>{error}</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
