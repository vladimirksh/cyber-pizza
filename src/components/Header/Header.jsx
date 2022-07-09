import React from "react";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="Логотип" />
            <div>
              <h1>Pizza</h1>
              <p>самая вкусная пицца</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={basket} alt="Корзина" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
