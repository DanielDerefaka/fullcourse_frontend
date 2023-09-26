import axios from "axios";
import { ALL_SUPPLIER_ROUTE, VERIFY_SUPPLY_STATUS_ROUTE } from "../constants/APIroutes";

export const VERIFY_SUPPLIER_CALL = async (name) => {
  try {
    const response = await axios.get(VERIFY_SUPPLY_STATUS_ROUTE);

    if (response.data.success) {
      console.log("Transaction is successful");
      // localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
  } catch (err) {
    return err.response;
  }
};
export const ALL_SUPPLIERS_CALL = async (name) => {
  try {
    const response = await axios.get(ALL_SUPPLIER_ROUTE);

    if (response.data.success) {
      console.log("SUPPLIER FETCHED SUCCESSFULLY");
      // localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
  } catch (err) {
    return err.response;
  }
};
