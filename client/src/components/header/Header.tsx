import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shoppingCartContext";

function Header() {
  const {openCart, cartQuantity} = useShoppingCart();
  return (
    <div className="header flex-column ">
      <div className="header_strip ">
        <h1 className="site_title"> JarMountain </h1>
        <Link to="/goods">
          <button className="header_buttons">Список товарів</button>
        </Link>
        <Link to="/">
          <button className="header_buttons" type="button">
            Про Нас
          </button>
        </Link>
        <Link to="/user">

          <button className="header_buttons position-relative"
          onClick={openCart}>
            Замовлення{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              className="cart_icon position-absolute "
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div className="count rounded-circle bg-danger d-flex justify-content-center align-items-center">
            {cartQuantity}
            </div>
          </button>

        </Link>
        <Link to="/contact">
          <button className="contact">Контакт </button>
        </Link>
      </div>

    </div>
  );
}
export default Header;
