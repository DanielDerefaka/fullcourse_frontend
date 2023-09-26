import axios from "axios";
import { UPLOAD_PROPERTY_IMAGE_ROUTE } from "../../constants/APIroutes";
import { API_URL } from "../../constants/types";
import setAuthToken from "../../utils/setAuthToken";

// const API_URL = "/api/users/";

// Register user
const showAll = async () => {
  const response = await axios.get(`${API_URL}/api/v1/property`);

  if (response.data) {
    console.log(response.data.data);
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data.data;
};

const addProperty = async (payload) => {
  const response = await axios.post(`${API_URL}/api/v1/property/add`, payload);

  if (response.data.success) {
    console.log("Transaction is successful");
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const propertyById = async (id) => {
  await setAuthToken(localStorage.getItem("token"));

  const response = await axios.get(`${API_URL}/api/v1/shop/property/${id}`);

  if (response.data) {
    console.log(response.data);
  }

  return response.data.data;
};

const uploadPropertyImage = async (formData) => {
  await setAuthToken(localStorage.getItem("token"));
  const response = await axios.post(UPLOAD_PROPERTY_IMAGE_ROUTE, formData);

  if (response.data) {
    console.log(response.data);
  }
};
const authService = {
  showAll,
  addProperty,
  propertyById,
};

export default authService;
