import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoutes } from "../../core/apiRoutes";
import server, { base } from "../../core/axios/initAxios";
import setAuthToken from "../../utils/setAuthToken";
import walletService from "./walletService";

export const WalletTopUp = createAsyncThunk(
  "wallet/topup",
  async (payload, thunkAPI) => {
    // console.log(payload);

    try {
      return await walletService.walletTopup(payload);
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const WalletBalance = createAsyncThunk(
  "wallet/balance",
  async (thunkAPI) => {
    // console.log(payload);

    try {
      return await walletService.showBalance();
    } catch (err) {
      console.log("Error : " + err.response.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
