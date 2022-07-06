import React from "react";
import logo from "../../images/logo.png";
import basket from "../../images/basket.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__image" alt="Логотип" src={logo} />
        <div>
          <h1 className="header__title">Rick Pizza</h1>
          <p className="header__text">самая лучшая пицца во всех измерениях</p>
        </div>
      </div>

      <div className="header__cart">
        <a href="/cart.html" className="button button--cart">
          <span>520 ₽</span>
          <div className="button__delimiter"></div>
          <img className="header__basket" alt="Корзина" src={basket} />
          <span>3</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
