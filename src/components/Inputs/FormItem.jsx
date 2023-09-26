import React from "react";
import { FlexContainer } from "../Layouts/StyledLayouts";
import { InputHeaderText } from "../Typography";

const FormItem = React.memo(({ children, title }) => {
  return (
    <FlexContainer orientation={"column"}>
      <InputHeaderText> {title} </InputHeaderText>
      {children}
    </FlexContainer>
  );
});

export default FormItem;
