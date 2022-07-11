import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMesaj } from "./message";

import AuthService from "../../services/auth-service";

const user = typeof window !== "undefined" && localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
// const user = JSON.parse(global.localStorage.getItem("user"));

export const kayit = createAsyncThunk(
  "auth/kayit",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.kayit(username, email, password);
      thunkAPI.dispatch(setMesaj(response.data.message));
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      thunkAPI.dispatch(setMesaj(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const giris = createAsyncThunk(
  "auth/giris",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.giris(email, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMesaj(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const cikis = createAsyncThunk("auth/cikis", async () => {
  await AuthService.cikis();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [kayit.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [kayit.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [giris.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [giris.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [cikis.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
