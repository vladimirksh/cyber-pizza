import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Params = Record<string, string>;

export type Sort = { name: string; sort: string; desc: boolean };

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sortType: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFilters(state, action: PayloadAction<Params>) {
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

export const {
  setCategoryId,
  setSortType,
  setPageCount,
  setFilters,
  setSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
