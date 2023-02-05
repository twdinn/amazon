import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const proceedToPay = () => {
    navigate("/payment");
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal</p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={proceedToPay}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
