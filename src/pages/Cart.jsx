import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/Cart/CartItems";
import { BiArrowBack } from "react-icons/bi";
import "../components/Cart/cart.css";
import { useNavigate } from "react-router-dom";
import CartComponent from "../components/Cart/CartComponent";
import Proceed from "../components/Cart/Proceed";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(items);
  });
  return (
    <div className="">
      <div className="cart-main">
        <CartComponent />

        <div className="summary">
          <h4> Order summary</h4>
          <div className="flex" style={{ fontSize: "14px" }}>
            <div className="">
              <span> Subtotal : </span>
            </div>
            <div className="">
              <p style={{ color: "#7e8386", marginLeft: "120px" }}>
                {" "}
                NGN414,600.00
              </p>
            </div>
          </div>
          <div className="flex" style={{ fontSize: "14px" }}>
            <div className="">
              <span> Shipping : </span>
            </div>
            <div className="">
              <p style={{ color: "#7e8386", marginLeft: "50px" }}>
                {" "}
                Calculated and checkout
              </p>
            </div>
          </div>
          <div className="flex" style={{ fontSize: "14px" }}>
            <div className="">
              <span> Shipping : </span>
            </div>
            <div className="">
              <p
                style={{
                  color: "#7e8386",
                  justifyContent: "end",
                  marginLeft: "50px",
                }}
              >
                {" "}
                Calculated and checkout
              </p>
            </div>
          </div>
          <Proceed btnType={"button"} />
          {/* <button onClick={() => navigate("checkout")}>
              {" "}
              proceed to checkout
            </button> */}
          <div>
            <p> Discount Code</p>
            <p> Enter your coupon code if you have one </p>
            <div>
              <input type="text" className="in" />
            </div>
            <br />
            <button
              className=""
              style={{
                padding: "5px 40px",
                backgroundColor: "#519E38",
                borderRadius: "5px",
                border: "none",
                color: "white",
              }}
            >
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
