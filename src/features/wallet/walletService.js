import axios from "axios";
import { API_URL } from "../../constants/types";

// const API_URL = "/api/users/";

// Register user
const showBalance = async () => {
  const response = await axios.get(`${API_URL}/api/v1/property`);

  if (response.data) {
    console.log(response.data.data);
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data.data;
};

const walletTopup = async (payload) => {
  const response = await axios.post(`${API_URL}/api/v1/property/add`, payload);

  if (response.data.success) {
    console.log("Transaction is successful");
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const walletService = {
  showBalance,
  walletTopup,
};

export default walletService;
