import React from "react";
import styled from "styled-components";
import { HeadingText } from "./Typography/HeadingText";
// import build from "./img/clarity_building-solid.svg";

const Action = ({ image, heading, details }) => {
  return (
    <div className="col-md-4" style={{ textAlign: "center" }}>
      <div>
        <img src={image} alt="build" />
        <HeadingText style={{ color: "#519E38", fontSize: "20px" }}>
          {heading}
        </HeadingText>
      </div>
      <div className="">
        <Paragraph>{details}</Paragraph>
      </div>
    </div>
  );
};

export default Action;

const Paragraph = styled.p`
  font-weight: 400;
`;
