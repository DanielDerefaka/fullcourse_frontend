import React from "react";
import styled from "styled-components";
import no_data from "../assets/lottie/nodata.json";

import Lottie from "lottie-react";

const NoData = () => {
  return (
    <Container>
      <Lottie animationData={no_data} />

      <p> NO DATA</p>
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
