import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
import "./Navbar.css";
import { useState } from "react";
import logo from "../img/logo.png";
import shoe from "../img/shoe.png";
import shoe1 from "../img/shoe1.png";
function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-nav container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} />
          </div>
          <div className="navbar-title">
            <h1>REACT SNEAKERS</h1>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <div className="navbar-right">
          <li onClick={toggleCart}>
            <LuShoppingCart />
            <p>246,54 $</p>
          </li>
          <li>
            <LuHeart />
            <p>Bookmarks</p>
          </li>
          <li>
            <LuUserCircle />
            <p>Profile</p>
          </li>
        </div>
      </div>
      {cartOpen && (
        <div className="cart-menu">
          <h2>Shopping cart</h2>
          <div className="cart-products">
            <div className="cart-product">
              <div className="cart-product__image">
                <img src={shoe1} alt="Nike Air Max 270" />
              </div>
              <div className="cart-product__text">
                <h3>Nike Air Max 270 Men's Sneakers</h3>
                <p>149,07 $</p>
              </div>
            </div>
            <div className="cart-product">
              <div className="cart-product__image">
                <img src={shoe} alt="Nike Blazer Mid Suede" />
              </div>
              <div className="cart-product__text">
                <h3>Nike Blazer Mid Suede Men's Sneakers</h3>
                <p>97,47 $</p>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <p>Total: 246,54 $</p>
            <p>Tax 5%: 12,32 $</p>
          </div>
          <button className="summary-button">Submit</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
