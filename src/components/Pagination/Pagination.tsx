import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

import styles from "./Pagination.module.scss";

function Pagination() {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => {
        dispatch(setPageCount(e.selected + 1));
      }}
      pageRangeDisplayed={4}
      pageCount={3}
    />
  );
}

export default Pagination;
