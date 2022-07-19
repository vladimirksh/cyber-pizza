import React, { useState, useEffect, useContext } from "react";

import { useSelector } from "react-redux";
import axios from "axios";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";
import Pagination from "../components/Pagination/Pagination";

import { SearchContext } from "../../src/components/App/App";

function Main() {
  const { categoryId, sortType } = useSelector((state) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62c828458c90491c2cb00d05.mockapi.io/items?p=${currentPage}&l=4&${
          categoryId > 0 ? `category=${categoryId}` : ``
        }&sortBy=${sortType.sort}&order=${
          sortType.desc ? `desc` : "asc"
        }&search=${searchValue ? `${searchValue}` : ""}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((item) => <Pizza {...item} key={item.id} />)}
      </div>
      <Pagination
        onChangePage={(number) => {
          setCurrentPage(number);
        }}
      />
    </>
  );
}

export default Main;
