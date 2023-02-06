import Header from "../components/Header";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function CheckoutPage() {
  // const key = uuidv4();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="./images/Amazon-Prime-Early-Access-Sale.jpeg"
            alt=""
          />

          <div>
            {/* <h3>Hello, {user?.email}</h3> */}
            <h3>Hello</h3>
            <h2 className="checkout_name">Your shopping Basket</h2>

            {cart.map((item) => (
              <CheckoutProduct
                key={uuidv4}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
