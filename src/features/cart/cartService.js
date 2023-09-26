import axios from "axios";
import {
  ADD_TO_CART_ROUTE,
  SHOW_ALL_CART_ROUTE,
} from "../../constants/APIroutes";

// DISPLAY ALL ROUTES
const allCart = async () => {
  const response = await axios.get(SHOW_ALL_CART_ROUTE);

  if (response.data) {
    console.log(response.data);
    // localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//ADD ITEM TO CART
const addCart = async (payload) => {
  const response = await axios.post(`${ADD_TO_CART_ROUTE}`, payload);

  if (response.data.success) {
    console.log("Cart is added succesfully");
  }

  return response.data;
};

const cartService = {
  allCart,
  addCart,
};

export default cartService;
