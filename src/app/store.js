import { configureStore } from "@reduxjs/toolkit";
import addPropertySlice from "../features/add_property/addPropertySlice";
import AdminSlice from "../features/admin_auth/AdminSlice";
import authReducer from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import goalReducer from "../features/goals/goalSlice";

import propertySlice from "../features/property/estateSlice";
import shopSlice from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    property: propertySlice,
    shop: shopSlice,
    admin: AdminSlice,
    new_property: addPropertySlice,
    cart: cartSlice,
  },
});
