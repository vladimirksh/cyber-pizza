import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { categoryId, sortType, pageCount, searchValue } = params;
    const { data } = await axios.get(
      `https://62c828458c90491c2cb00d05.mockapi.io/items?p=${pageCount}&l=4&${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&sortBy=${sortType.sort}&order=${
        sortType.desc ? `desc` : "asc"
      }&search=${searchValue ? `${searchValue}` : ""}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succsess";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
