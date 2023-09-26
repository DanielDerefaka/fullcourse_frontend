import axios from "axios";
import { API_URL } from "../../constants/types";
// import setAuthToken from "../../utils/setAuthToken";

const REGISTER_URL = `${API_URL}/api/v1/users/register`;
const LOGIN_URL = `${API_URL}/api/v1/users/login`;
const VERIFY_OTP_URL = `${API_URL}/api/v1/users/verify/otp`;

// Register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);

  if (response.data) {
    console.log(response.data.token, "see here");
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token.toString());
    return response.data;
  }

  return response;
};

const verify_otp = async (payload) => {
  const response = await axios.post(VERIFY_OTP_URL, payload);

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const authService = {
  register,
  logout,
  login,
  verify_otp,
};

export default authService;
