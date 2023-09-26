import React from "react";
import { Row } from "reactstrap";
import Header from "./Header";
import { Container } from "./Layouts/Container";
import MainContainer from "./Layouts/MainContainer";
import Sidenav from "./Sidenav";

const DefaultLayout = () => {
  return (
    <div>
      <MainContainer>
        <Sidenav />
        <Container>
          <Row md={12} style={{ width: "100%" }}>
            <Header auth={true} />
          </Row>
        </Container>
      </MainContainer>
    </div>
  );
};

export default DefaultLayout;
