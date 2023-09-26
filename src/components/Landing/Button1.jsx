import React from "react";

const Button1 = ({ onClick }) => {
  return (
    <div>
      <button className="bttn1" onClick={onClick}>
        Go To Shop
      </button>
    </div>
  );
};

export default Button1;
