import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  filterItems: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      let filterSearch = action.payload.toLowerCase();

      state.filterItems = state.items.filter((obj) => {
        let finalRes = obj.name.toLowerCase();
        return finalRes.indexOf(filterSearch) !== -1;
      });
    },
    setCategories(state, action) {
      state.filterItems = action.payload;
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // immer
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      // immer
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      // immer
      state.status = "rejected";
    },
  },
});

export const { filterProducts, setCategories } = productsSlice.actions;

export default productsSlice.reducer;
