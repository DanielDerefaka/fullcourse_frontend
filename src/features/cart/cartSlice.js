import { createSlice } from "@reduxjs/toolkit";
import setAuthToken from "../../utils/setAuthToken";
import { addCart, showAllCart } from "./cartActions";

const initialState = {
  loading: false,
  error: "",
  items: [],
  isSuccessful: false,
  total: 0,
};
setAuthToken(localStorage.getItem("token"));

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showAllCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.loading = false;
        state.total = action.payload.items.length;
      })
      .addCase(showAllCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCart.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })

      .addCase(addCart.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccessful = true;
        state.total++;
      })
      .addCase(addCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export default propertySlice.reducer;

export const {} = propertySlice.actions;
