// import { reset } from "nodemon";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { getGoals } from "../features/goals/goalSlice";
// import Header from "./Header";
import Header from "../components/Header";
import Spinner from "./Spinner";
import MainContainer from "./Layouts/MainContainer";
import { Container, Row } from "reactstrap";
import Sidenav from "./Sidebar/Sidenav";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Sidenav />
        <div>
          <Outlet />
        </div>
      </MainContainer>
    </>
  );
};

export default PrivateRoute;
