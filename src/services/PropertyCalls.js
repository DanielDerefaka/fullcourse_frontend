import axios from "axios";
import {
  UPLOAD_PROPERTY_IMAGE_ROUTE,
  UPLOAD_PROPERTY_SUPPLIER_IMAGE_ROUTE,
  VERIFY_PROPERTY_AGENT_STATUS_ROUTE,
} from "../constants/APIroutes";

// const API_URL = "/api/users/";

export const PROPERTY_IMAGE_UPLOAD_CALL = async (payload) => {
  const response = await axios.post(
    UPLOAD_PROPERTY_SUPPLIER_IMAGE_ROUTE,
    payload
  );

  if (response.data.success) {
    console.log("Transaction is successful");
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

export const VERIFY_PROPERTY_AGENT_CALL = async () => {
  const response = await axios.get(VERIFY_PROPERTY_AGENT_STATUS_ROUTE);

  if (response.data.success) {
    console.log("Transaction is successful");
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};
