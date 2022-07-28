import React from "react";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

function Header() {
  const location = useLocation();
  const { totalPrice, items } = useSelector(selectCart);
  const totalItems = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

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
        {location.pathname !== "/cart" && <Search />}
        <div className="header__cart">
          {location.pathname !== "/cart" && (
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <img src={basket} alt="Корзина" />
              <span>{totalItems}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
