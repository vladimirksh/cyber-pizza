import React, { useContext } from "react";
import styles from "./Search.module.scss";
import clear from "../../assets/img/clear.svg";
import { SearchContext } from "../App/App";

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <form className={styles.form}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <button onClick={() => setSearchValue("")}>
          <img alt="Очистить" src={clear} />
        </button>
      )}
    </form>
  );
}

export default Search;
