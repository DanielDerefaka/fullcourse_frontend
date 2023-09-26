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
  border-bottom: 3px solid #79b660;
  p {
    font-family: "Stolzi", sans-serif;
    font-size: 1.5rem;
    font-weight: 600 !important;
    color: #333;
  }
`;
