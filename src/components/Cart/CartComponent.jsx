import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartComponent = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="">
        {items && items.length > 0 ? (
          items.map((item) => {
            return <CartItems item={item.item_name} image={item.image} />;
          })
        ) : (
          <>no item in cart</>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
