import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  originalItems: [],
};

export const productList = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAll: (state, action) => {
      const product = action.payload;
      state.items = product;
      state.originalItems = product;
    },
    filterNameA: (state) => {
      const sortedProduct = [...state.items].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      state.items = sortedProduct;
    },
    filterNameZ: (state) => {
      const sortedProduct = [...state.items].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      state.items = sortedProduct;
    },
    filterRatingHigh: (state) => {
      const sortedProduct = [...state.items].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      state.items = sortedProduct;
    },
    filterRatingLow: (state) => {
      const sortedProduct = [...state.items].sort(
        (a, b) => a.rating.rate - b.rating.rate
      );
      state.items = sortedProduct;
    },
    filterPriceHigh: (state) => {
      const sortedProduct = [...state.items].sort((a, b) => b.price - a.price);
      state.items = sortedProduct;
    },
    filterPriceLow: (state) => {
      const sortedProduct = [...state.items].sort((a, b) => a.price - b.price);
      state.items = sortedProduct;
    },
    searchItems: (state, action) => {
      const search = action.payload;
      const searchProduct = [...state.items].filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      if (search === "") {
        state.items = state.originalItems;
      } else {
        state.items = searchProduct;
      }
    },
  },
});
export default productList.reducer;

export const {
  productAll,
  filterNameA,
  filterNameZ,
  filterRatingLow,
  filterRatingHigh,
  filterPrice,
  filterPriceHigh,
  filterPriceLow,
  searchItems,
} = productList.actions;

export const ProductItemsAll = (state) => state.product.items;
