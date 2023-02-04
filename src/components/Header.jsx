import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="/images/Amazon_logo.png" alt="logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <FaSearch className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            {/* <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span> */}
            <span className="header_optionLineTwo">{"Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <FaShoppingCart />
            <span className="header_optionLineTwo header_basketCount"></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
