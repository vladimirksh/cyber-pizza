import { Link } from "react-router-dom";

import basket from "../assets/img/basket-black.svg";
import trash from "../assets/img/trash.svg";

import { useSelector, useDispatch } from "react-redux";
import { cleatItem, selectCart } from "../redux/slices/cartSlice";

import CartItem from "../components/CartItem/CartItem";

import CartEmpty from "../components/CartEmpty/CartEmpty";

const Cart: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const totalItems = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(cleatItem());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={basket} alt="Корзина" />
            Корзина
          </h2>
          <div className="cart__clear">
            <button onClick={onClickClear}>
              <img src={trash} alt="Ведро" />
              Очистить корзину
            </button>
          </div>
        </div>
        <div className="content__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalItems} шт.</b>{" "}
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
