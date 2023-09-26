// import { reset } from "nodemon";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
// import Header from "./Header";
import Spinner from "./Spinner";
import MainContainer from "./Layouts/MainContainer";
import { Container, Row } from "reactstrap";
import AdminHeader from "./Header/AdminHeader";
import AdminSideNav from "./Sidebar/AdminSidenav";

const AdminRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.admin);
  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <MainContainer>
        <div>
          <AdminSideNav />
          <AdminHeader />
          <Row>
            <Outlet />
          </Row>
        </div>
      </MainContainer>
    </>
  );
};

export default AdminRoute;
