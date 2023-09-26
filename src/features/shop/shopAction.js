import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoutes } from "../../core/apiRoutes";
import server, { base } from "../../core/axios/initAxios";
import setAuthToken from "../../utils/setAuthToken";
import shopService from "./shopService";

export const AllMaterials = createAsyncThunk(
  "shop/showAll",
  async (payload, thunkAPI) => {
    // console.log(payload);

    try {
      return await shopService.showAll();
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const GetItemByID = createAsyncThunk(
  "shop/itemByID",
  async (id, thunkAPI) => {
    // console.log(payload);

    try {
      return await shopService.showByID(id);
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
