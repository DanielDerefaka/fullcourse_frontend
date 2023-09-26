// import { reset } from "nodemon";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { getGoals } from "../features/goals/goalSlice";
// import Header from "./Header";
import Header from "./Header";
import Spinner from "./Spinner";
import MainContainer from "./Layouts/MainContainer";
import { Container, Row } from "reactstrap";
import Sidenav from "./Sidebar/Sidenav";

const PublicRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <MainContainer>
        <Container>
          <Row md={12} style={{ width: "100%" }}>
            <Header auth={true} />
          </Row>
          <Outlet />
        </Container>
      </MainContainer>
    </>
  );
};

export default PublicRoute;
