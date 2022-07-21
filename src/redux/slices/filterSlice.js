import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 1,
  sortType: {
    name: "популярности (убыванию)",
    sort: "rating",
    desc: true,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.category);
      state.pageCount = Number(action.payload.p);
      state.sortType = {
        name: `${
          action.payload.sortBy === "rating" ? "популярности" : "цене"
        } ${action.payload.order === "desc" ? "(убыванию)" : "(возрастанию)"}`,
        sort: action.payload.sortBy,
        desc: action.payload.order === "desc" ? true : false,
      };
    },
  },
});

export const { setCategoryId, setSortType, setPageCount, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
