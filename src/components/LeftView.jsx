import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const LeftView = () => {
  return (
    <Container>
      <div className="top">
        <Logo />
      </div>

      <div className="main">
        <h3>Welcome</h3>
        <h6>Easy place to find your dream property</h6>
      </div>
    </Container>
  );
};

export default LeftView;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: url("/images/view.png");

  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .main {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h3 {
      font-weight: 900;
      font-size: 3rem;
    }

    h6 {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
