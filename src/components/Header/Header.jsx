import React from "react";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

import { useSelector } from "react-redux";

function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="header">
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
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <img src={basket} alt="Корзина" />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
