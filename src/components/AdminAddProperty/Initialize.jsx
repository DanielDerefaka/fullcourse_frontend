import React from "react";
import { useDispatch } from "react-redux";
import { next } from "../../features/add_property/addPropertySlice";
import { CurvedButton } from "../Buttons/CurvedButton";
import { CenterContainer } from "../Layouts/CenterContainer";
import { Container } from "../Layouts/Container";

const Initialize = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CenterContainer>
        <p>Add Property</p>
        <CurvedButton onClick={() => dispatch(next())}>start</CurvedButton>
      </CenterContainer>
    </Container>
  );
};

export default Initialize;
