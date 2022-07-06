import React from "react";
import "./../../scss/app.scss";
import Header from "../Header/Header";
import Categories from "../Catigories/Catigories";
import Sort from "../Sort/Sort";
import Pizza from "../Pizza/Pizza";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div classNameName="content__top">
            <Categories />
            <Sort />
          </div>

          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
