import { createSlice } from "@reduxjs/toolkit";
import setAuthToken from "../../utils/setAuthToken";
import { showProperties, AddProperty, showPropertyByID } from "./estateActions";

const initialState = {
  loading: false,
  error: "",
  properties: [],
};
setAuthToken(localStorage.getItem("token"));

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.properties = action.payload;
    });
    builder.addCase(showProperties.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.properties = [];
    });

    builder.addCase(AddProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.properties.push(action.payload.data);
    });
    builder.addCase(AddProperty.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(showPropertyByID.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(showPropertyByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(showPropertyByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    
  },
});

export default propertySlice.reducer;

export const {} = propertySlice.actions;
