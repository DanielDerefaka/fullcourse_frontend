import React from "react";
import { HeadingText } from "../Typography/HeadingText";
import { HeadingText2 } from "../Typography/HeadingText2";
import group from "./img/Group.svg";
import "./Landing.css";
const Choose = () => {
  return (
    <div data-aos="slide-left">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HeadingText2> Why choose us</HeadingText2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img className="img-fluid" src={group} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ marginTop: "40px" }}>
            <HeadingText> We always select best properties for you</HeadingText>
            <div style={{ marginTop: "30px" }}>
              <p style={{color:"black"}}>
                Lorem ipsum dolor sit amet consectetur. Neque viverra risus duis
                ipsum sit velit vestibulum diam. Laoreet mauris sed eu pretium
                egestas tincidunt nisl quis. Lorem netus ut sagittis morbi
                sagittis in velit viverra malesuada. Neque congue maecenas lacus
                lectus vitae felis.
              </p>
            </div>
            <div>
              <div className="flex">
                <div style={{ marginRight: "80px" }}>
                  <h3 style={{ color: "#519E38" }}> 10 years</h3>
                  <p style={{color:"black"}}> Experience</p>
                </div>
                <div style={{ marginRight: "80px" }}>
                  <h3 style={{ color: "#519E38" }}> 300+ </h3>
                  <p style={{color:"black"}}> Properties</p>
                </div>
                <div>
                  <h3 style={{ color: "#519E38" }}> 99%</h3>
                  <p style={{color:"black"}}> Happy Clients </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
