import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pizza from "../Pizza/Pizza";
import PizzaSkeleton from "../PizzaSkeleton/PizzaSkeleton";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://62c828458c90491c2cb00d05.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => (
              <Pizza {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
