import React from "react";
import styled from "styled-components";

const Text1 = styled.h1`
  font-weight: 900;
  color: ${(props) => props.color || "#000"};
  font-size: 15px;
`;
export const HeadText = React.memo(({ children, color }) => {
  return (
    <div>
      <Text1 color={color}>{children}</Text1>
    </div>
  );
});

const Subheading = styled.h1`
  font-weight: 500;
  color: #373535;
  font-size: 15px;
`;
export const SubHeading = React.memo(({ children }) => {
  return (
    <div>
      <Subheading>{children}</Subheading>
    </div>
  );
});

const InputheaderText = styled.h1`
  font-weight: 700;
  color: #373535;
  font-size: 15px;
`;
export const InputHeaderText = React.memo(({ children }) => {
  return (
    <div>
      <InputheaderText>{children}</InputheaderText>
    </div>
  );
});
