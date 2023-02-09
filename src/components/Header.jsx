import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  // Use the useSelector hook to access data from the Redux store
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header">
      {/* Link to the homepage */}
      <Link to="/">
        <img
          className="header_logo"
          src="./images/Amazon_logo.png"
          alt="logo"
        />
      </Link>

      {/* Search bar */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <FaSearch className="header_searchIcon" />
      </div>

      {/* Navigation options */}
      <div className="header_nav">
        {/* Link to the login page */}
        <Link to={"/login"} className="header_links">
          <div className="header_option">
            <span className="header_optionLineOne">
              {/* Show either the user's name or "Guest "  */}
              Hello {user && user.name ? user.name : "Guest"}
            </span>

            {/* Show "Sign Out" if the user is logged in, or "Sign In" if not */}
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* Link to the orders page */}
        <Link to="/orders" className="header_links">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* Prime information */}
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        {/* Link to the checkout page */}
        <Link to="/checkout" className="header_links">
          <div className="header_optionCart">
            <FaShoppingCart />

            <span className="header_optionLineTwo header_CartCount">
              {/* Show the number of items in the cart */}
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
