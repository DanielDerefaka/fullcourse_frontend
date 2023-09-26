import { createAsyncThunk } from "@reduxjs/toolkit";
import setAuthToken from "../../utils/setAuthToken";
import cartService from "./cartService";

export const showAllCart = createAsyncThunk(
  "cart/showAll",
  async (payload, thunkAPI) => {
    try {
      return await cartService.allCart();
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addCart = createAsyncThunk(
  "cart/add",
  async (payload, thunkAPI) => {
    try {
      return await cartService.addCart(payload);
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
