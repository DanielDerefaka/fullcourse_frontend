import axios from "axios";

const API_URL = "http://localhost:6414/api/v1/admin/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("authorization", JSON.stringify(response.data.token));
    localStorage.setItem("admin", JSON.stringify(response.data.user));
  }

  return response.data;
};
const   verify = async (token) => {
  const response = await axios.post(API_URL + "verify", token);

  if (response.data.success) {
    localStorage.setItem("admin", JSON.stringify(response.data.user));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("authorization");
};

const authService = {
  register,
  logout,
  login,
  verify,
};

export default authService;
