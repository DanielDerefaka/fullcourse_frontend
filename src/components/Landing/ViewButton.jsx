import React from "react";
import "./Landing.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FlatButton } from "../Buttons/FlatButton";
import { FlatButton2 } from "../Buttons/FlatButton2";
import styled from "styled-components";

const ViewButton = () => {
  const navigate = useNavigate();
  return (
    <Container
      className=" flex align-center justify-content"
      onClick={() =>
        navigate({
          pathname: "/property",
        })
      }
    >
      <div>View Listing</div>
      <FaArrowCircleRight />
    </Container>
  );
};

export default ViewButton;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  text-align: center;
  padding: 1rem;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  div {
    font-weight: 900;
  }
`;
