import React, { useCallback, useContext, useRef } from "react";
import styles from "./Search.module.scss";
import clear from "../../assets/img/clear.svg";
import debounce from "lodash.debounce";
import { SearchContext } from "../App/App";

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const inputRef = useRef();

  const testDebounnce = useCallback(
    debounce(() => {
      console.log("hi");
    }, 1000),
    []
  );

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
    testDebounnce();
  };

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <button onClick={() => onClickClear()}>
          <img alt="Очистить" src={clear} />
        </button>
      )}
    </form>
  );
}

export default Search;
