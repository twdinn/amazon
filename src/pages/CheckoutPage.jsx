import Header from "../components/Header";
import Subtotal from "../components/Subtotal";

// import CheckoutProduct from "../components/CheckoutProduct";

function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            {/* <h3>Hello, {user?.email}</h3> */}
            <h3>Hello</h3>
            <h2 className="checkout_name">Your shopping Basket</h2>

            {/* <CheckoutProduct
            id={id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
          /> */}
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
