import React from "react";
import styled from "styled-components";

const Estates = ({ estate }) => {
  const {
    title,
    description,
    from_amount,
    to_amount,
    propert_id,
    location,
    images,
  } = estate;
  return (
    <div>
      <p>here</p>
      <p>{title}</p>
    </div>
  );
};

export default Estates;

const EstateContainer = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  margin: 1rem 2rem;
  background-color: green;
  flex-direction: column;
`;
