import React from "react";
import styled from "styled-components";

const Gap = () => {
  return <GapComponent>&nbsp; </GapComponent>;
};

export default Gap;

const GapComponent = styled.div`
  content: "";
  width: 100%;
  margin-bottom: ${(props) => props.vertical || "0px"};
`;
