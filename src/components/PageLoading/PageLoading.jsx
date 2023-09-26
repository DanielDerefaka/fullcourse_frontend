import React from "react";
import { LoadingContainer } from "./Layout";
import Logo from "../Logo";

const PageLoading = () => {
  return (
    <LoadingContainer>
      <Logo size={200} />
      <h4> LOADING ...</h4>
    </LoadingContainer>
  );
};

export default PageLoading;
