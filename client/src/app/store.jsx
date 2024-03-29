import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});


// Redux Fundamentals
// productSlice => fetchAllProductsAsync = createAsyncThunk do action => action.payload => initialState products = []