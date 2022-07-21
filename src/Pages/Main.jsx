import React, { useState, useEffect, useContext, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../redux/slices/filterSlice";

import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";
import Pagination from "../components/Pagination/Pagination";

import { SearchContext } from "../../src/components/App/App";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, pageCount } = useSelector(
    (state) => state.filter
  );

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  const fetchPizzas = () => {
    setIsLoading(true);
    axios
      .get(
        `https://62c828458c90491c2cb00d05.mockapi.io/items?p=${pageCount}&l=4&${
          categoryId > 0 ? `category=${categoryId}` : ``
        }&sortBy=${sortType.sort}&order=${
          sortType.desc ? `desc` : "asc"
        }&search=${searchValue ? `${searchValue}` : ""}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isMounted.current) {
      const sortPropery = qs.stringify({
        p: pageCount,
        category: categoryId,
        sortBy: sortType.sort,
        order: sortType.desc ? `desc` : "asc",
        search: searchValue ? searchValue : "",
      });
      navigate(`?${sortPropery}`);
    }
    isMounted.current = true;
  }, [sortType.sort, sortType.desc, categoryId, pageCount, searchValue]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, pageCount, searchValue]);

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
      <Pagination />
    </>
  );
}

export default Main;
