import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type FetchPizzasArgs = {
  categoryId: number;
  pageCount: number;
  searchValue: string;
  sortType: {
    desc: boolean;
    name: string;
    sort: string;
  };
};

type Pizza = {
  category: number;
  id: Number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};

enum Status {
  LOADING = "loading",
  SUCCSESS = "succsess",
  ERROR = "error",
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  order: string;
  pageCount: string;
  searchValue: string;
  sortType: string;
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { categoryId, sortType, pageCount, searchValue } = params;
    const { data } = await axios.get(
      `https://62c828458c90491c2cb00d05.mockapi.io/items?p=${pageCount}&l=4&${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&sortBy=${sortType.sort}&order=${
        sortType.desc ? `desc` : "asc"
      }&search=${searchValue ? `${searchValue}` : ""}`
    );
    return data as Pizza[];
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCSESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
