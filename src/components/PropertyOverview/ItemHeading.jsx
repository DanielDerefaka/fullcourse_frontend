import React from "react";
import styled from "styled-components";

const ItemHeading = ({ title }) => {
  return (
    <ItemHead>
      <p> {title}</p>
    </ItemHead>
  );
};

export default ItemHeading;

const ItemHead = styled.div`
  margin: 3rem 0rem;
  width: 100%;
  border-bottom: 3px solid #79b660  ;
  line-height: 1px;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #333;
  }
`;
