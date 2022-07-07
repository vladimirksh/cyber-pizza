import React from "react";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="Логотип" />
          <div>
            <h1>Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={basket} alt="Корзина" />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
