import { createSlice } from "@reduxjs/toolkit";
import { AllMaterials, GetItemByID } from "./shopAction";

const initialState = {
  loading: false,
  error: "",
  items: [],
  item: {},
};
const shop = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AllMaterials.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(AllMaterials.pending, (state) => {
      state.loading = true;
    });
    builder
      .addCase(AllMaterials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.items = [];
      })
      .addCase(GetItemByID.pending, (state) => {
        state.loading = true;
      })

      .addCase(GetItemByID.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(GetItemByID.rejected, (state, action) => {
        state.loading = false;
        state.item = {};
        state.error = action.payload.message;
      });
  },
});

export default shop.reducer;

export const {} = shop.actions;
