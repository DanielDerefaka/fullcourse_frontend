import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoutes } from "../../core/apiRoutes";
import server, { base } from "../../core/axios/initAxios";
import setAuthToken from "../../utils/setAuthToken";
import estateService from "./estateService";

export const showProperties = createAsyncThunk(
  "property/showAll",
  async (payload, thunkAPI) => {
    // console.log(payload);

    try {
      return await estateService.showAll();
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
