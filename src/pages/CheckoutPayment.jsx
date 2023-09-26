import React from "react";
import CheckList from "../components/CheckList";
import estate from "../assets/images/estate.jpeg";
import PaymentMethod from "../components/PaymentMethod";
import OrderDetail from "../components/OrderDetail";
import CartComponent from "../components/Cart/CartComponent";

const CheckoutPayment = () => {
  return (
    <div>
      <h3>Checkout</h3>
      <CartComponent />

      <div
        className="w3-row w3-round-large w3-card-2 w3-padding-32"
        style={{ marginTop: "45px" }}
      >
        <h3 className="w3-padding">Payment Methods</h3>
        <PaymentMethod />
        <OrderDetail />
      </div>
    </div>
  );
};

export default CheckoutPayment;
