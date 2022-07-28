import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import clear from "../../assets/img/clear.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
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
