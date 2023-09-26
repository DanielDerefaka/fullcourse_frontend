import React from "react";
import youtube from "./img/youtube.svg";
import imm from "./img/imm.png";
import { BiCard } from "react-icons/bi";

const Build = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <header
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#519E38",
        }}
      >
        {" "}
        Benefit of Capital City{" "}
      </header>
      <div className="row container" style={{ marginTop: "30px" }}>
        <div className="col-md-6">
          <div>
            <BiCard
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                // boxShadow:" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
                backgroundColor: "#519E38",
                color: "white",
                borderRadius: "5px",
                marginBottom:"10px"
              }}
            />
            <h4> Discount and Product Management</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ut
              blanditiis esse, quisquam perferendis, placeat doloremque
              necessitatibus molestiae corporis ea sunt. Error necessitatibus
              quis, ad dolorem eaque nostrum et nemo.
            </p>
          </div>
          <div>
            <BiCard
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                // boxShadow:" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
                backgroundColor: "#519E38",
                color: "white",
                borderRadius: "5px",
                marginBottom:"10px"
              }}
            />
            <h4> Discount and Product Management</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ut
              blanditiis esse, quisquam perferendis, placeat doloremque
              necessitatibus molestiae corporis ea sunt. Error necessitatibus
              quis, ad dolorem eaque nostrum et nemo.
            </p>
          </div>
          <div>
            <BiCard
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                // boxShadow:" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
                backgroundColor: "#519E38",
                color: "white",
                borderRadius: "5px",
                marginBottom:"10px"
              }}
            />
            <h4> Discount and Product Management</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ut
              blanditiis esse, quisquam perferendis, placeat doloremque
              necessitatibus molestiae corporis ea sunt. Error necessitatibus
              quis, ad dolorem eaque nostrum et nemo.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src={imm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
