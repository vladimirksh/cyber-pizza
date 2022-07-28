import { useEffect, useRef, useCallback } from "react";

import { useSelector } from "react-redux";
import { setFilters, setCategoryId } from "../redux/slices/filterSlice";
import { fetchPizzas, SearchPizzaParams } from "../redux/slices/pizzaSlice";

import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";
import Pagination from "../components/Pagination/Pagination";
import { RootState, useAppDispatch } from "../redux/store";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, pageCount, searchValue } = useSelector(
    (state: RootState) => state.filter
  );
  const { items, status } = useSelector((state: RootState) => state.pizza);

  const getPizzas = () => {
    dispatch(fetchPizzas({ categoryId, sortType, pageCount, searchValue }));
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
      const params = qs.parse(
        window.location.search.substring(1)
      ) as SearchPizzaParams;
      dispatch(setFilters(params));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, pageCount, searchValue]);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить данные с сервера. Попробуйте
            повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
            : items.map((item: any) => <Pizza {...item} key={item.id} />)}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default Main;
