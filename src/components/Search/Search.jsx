import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./Search.module.scss";
import clear from "../../assets/img/clear.svg";
import debounce from "lodash.debounce";
import { SearchContext } from "../App/App";

function Search() {
  const { setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  return (
    <form className={styles.form}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <button onClick={() => onClickClear()}>
          <img alt="Очистить" src={clear} />
        </button>
      )}
    </form>
  );
}

export default Search;
