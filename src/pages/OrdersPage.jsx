import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";

const OrdersPage = () => {
  // Use the useSelector hook to access the order state from the Redux store
  const orders = useSelector((state) => state.order);

  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>{" "}
        <div>
          <h2>Order</h2>
          {/* Check if the length of the orders is not 0, then render the orders, otherwise display the message "Order is empty" */}
          {orders?.length ? (
            orders.map((order) => (
              <div className="order" key={order.id}>
                {/* Render a CheckoutProduct component for each order */}
                <CheckoutProduct
                  id={order.id}
                  name={order.name}
                  image={order.image}
                  price={order.price}
                  rating={order.rating}
                  hideButton={true} // hideButton prop is passed to hide the "Remove from Cart" button
                />
              </div>
            ))
          ) : (
            <div>Order is empty</div>
          )}
          {/* Calculate and display the total cost of all orders */}
          <h3 className="order_total">
            Order Total: $
            <strong>
              {orders
                .reduce((amount, item) => item.price + amount, 0)
                .toFixed(2)}
            </strong>{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
