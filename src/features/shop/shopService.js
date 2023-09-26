import axios from "axios";
import { API_URL } from "../../constants/types";
import setAuthToken from "../../utils/setAuthToken";

// Register user
const showAll = async () => {
  await setAuthToken(localStorage.getItem("token"));

  const response = await axios.get(`${API_URL}/api/v1/shop/materials/all`);

  if (response.data) {
    console.log(response.data.data);
  }

  return response.data.data;
};
const showByID = async (id) => {
  await setAuthToken(localStorage.getItem("token"));

  const response = await axios.get(
    `${API_URL}/api/v1/shop/materials/itemByID/${id}`
  );

  if (response.data) {
    console.log(response.data);
  }

  return response.data.data;
};

const authService = {
  showAll,
  showByID,
};

export default authService;
