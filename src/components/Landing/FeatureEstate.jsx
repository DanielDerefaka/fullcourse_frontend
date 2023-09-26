import React, { useEffect } from "react";
import styled from "styled-components";
import { HeadingText } from "../Typography/HeadingText";
import Card from "./Card";

const FeatureEstate = () => {
  return (
    <Container data-aos="slide-right">
      <div
        style={{ textAlign: "center", marginTop: "30px" }}
        className="featured-header"
      >
        <HeadingText className=" title"> Featured Properties</HeadingText>

        <p className="info">
          We are the real estate agency that will help will help you find the
          best <br />
          residence of your dream
        </p>
      </div>

      <Card />
    </Container>
  );
};

export default FeatureEstate;

const Container = styled.div`
  width: 100%;

  .featured-header {
    padding: 1rem;
    .title {
      padding: 1rem;
      font-weight: 800;
      color: #519e38;
      font-size: 3rem;
    }

    .info {
      font-weight: 100;
      font-size: 2rem;
      color: #333;
    }
  }
`;
