import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  stage: 0,
  parameters: {},
};

const AddProperty = createSlice({
  name: "add_property",
  initialState,
  reducers: {
    next: (state) => {
      state.stage++;
    },

    previous: (state) => {
      state.stage--;
    },

    addParams: (state, action) => {
      // state.parameters = {
      //   [action.payload.key]: action.payload.value,
      // };

      state.parameters[action.payload.key] = action.payload.value;
    },

    reset: (state) => {
      state.stage = 0;
    },
  },
});

export default AddProperty.reducer;

export const { next, previous, reset, addParams } = AddProperty.actions;
