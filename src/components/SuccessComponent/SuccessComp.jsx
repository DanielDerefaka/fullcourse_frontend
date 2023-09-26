import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import tick from "../../assets/lottie/green_tick.json";

import styled from "styled-components";
import { reset } from "../../features/auth/authSlice";

const SuccessComp = ({ redirect_to, message }) => {
  const { isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/" + redirect_to);
      }
    }, 3000);

    return () => {
      dispatch(reset());
    };
  });

  return (
    <Container>
      <Lottie animationData={tick} loop />
      <p>{message}</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 2rem;
  font-weight: 600;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

export default SuccessComp;
