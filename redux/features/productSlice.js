import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/product/";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error)
  }
});

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.message;
    },
  },
});

//export const {} = productSlice.actions;

const { reducer } = productSlice;
export default reducer;
