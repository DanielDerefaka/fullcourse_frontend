import { height } from "@mui/system";
import React from "react";
import "./Landing.css";

const Plan = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        className="box2 container"
        style={{
          marginTop: "10px",
          backgroundColor: "#519E38",
          height: "500px",
          marginBottom: "10px",
          borderRadius: "30px",
        }}
      >
        <div style={{ margin: "20px" }}>
          <div className="row">
            <div className="col-md-6">
              <div style={{ color: "white", marginTop: "25%" }}>
                <h1> Digital Cooperative Re-invested to get more.</h1>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque iusto corrupti dolores earum cum esse sequi autem
                  sapiente. Laboriosam ad voluptatem laudantium eos earum
                  perferendis enim consequuntur alias veritatis quibusdam?
                </p>
                <button
                  style={{
                    background: "black",
                    color: "white",
                    borderRadius: "20px",
                    padding: "10px 50px",
                  }}
                >
                  Join Us{" "}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    background: "#031b03",
                    height: "450px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="container">
                    <div
                      className=""
                      style={{
                        background: "black",
                        height: "400px",
                        borderRadius: "20px",
                        marginTop:"10px",
                        width:"480px",
                        position:"absolute",
                        color:"white",
                        textAlign:"center"
                      }}
                    >
                        <h2> Cooperative Plan </h2>
                        <p> Subscribe to Enjot the best offers </p>
                        <div className="container" style={{
                            backgroundColor: "#14430497",
                            height:"300px",
                            width:"400px",
                            margin:"20px",
                            position:"relative",
                            borderRadius: "20px",
                        }}>
                            <div>
                                <h3> Cooperative </h3>
                            </div>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
