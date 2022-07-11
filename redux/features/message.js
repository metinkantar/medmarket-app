import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mesajSlice = createSlice({
  name: "mesaj",
  initialState,
  reducers: {
    setMesaj: (state, action) => {
      return { mesaj: action.payload };
    },
    clearMesaj: () => {
      return { mesaj: "" };
    },
  },
});

const { reducer, actions } = mesajSlice;

export const { setMesaj, clearMesaj } = actions
export default reducer;