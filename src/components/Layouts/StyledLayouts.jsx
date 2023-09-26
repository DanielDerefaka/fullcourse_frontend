import React from "react";

import styled from "styled-components";

const Flex = styled.div.attrs((props) => ({}))`
  display: flex;
  flex-direction: ${(props) => (props.orientation ? props.orientation : "row")};
  gap: ${(props) => props.gap || "10px"};
  width: ${(props) => props.width || "100%"};
  margin-left: ${(props) => props.marginLeft || "0rem"};
  margin-top: ${(props) => props.marginTop || "1rem"};
  margin-right: ${(props) => props.marginRight || "0rem"};
  margin-bottom: ${(props) => props.marginBottom || "1rem"};
  justify-content: ${(props) => (props.flexEnd ? "end" : "")};
  align-items: ${(props) => props.centerAlign || ""};
  /* background-color: red; */
  /* margin: 1rem 0rem; */
`;
export const FlexContainer = ({
  children,
  orientation,
  width,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  gap,
  marginRight,
  flexEnd,
  centerAlign,
}) => {
  return (
    <Flex
      orientation={orientation}
      width={width}
      gap={gap}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      flexEnd={flexEnd}
      marginRight={marginRight}
      centerAlign={centerAlign}
    >
      {children}
    </Flex>
  );
};

const Centercontainer = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  width: 100%;
  padding: 2rem;
  gap: ${(props) => props.gap || "20px"};
  align-items: center;
  flex-direction: ${(props) => props.orientation || "row"};
`;
export const CenterContainer = React.memo(({ children, orientation }) => {
  return (
    <Centercontainer orientation={orientation}>{children}</Centercontainer>
  );
});

export const EmphasisContainer = React.memo(
  ({ children, background, borderColor, borderWidth }) => {
    const View = styled.div`
      background-color: ${background || "#eee"};
      border: 2px solid #fab739;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: inherit;
      margin: 0rem 1rem;
      padding: 1rem;
      font-weight: 300;
      color: #333;
      border-radius: 4px;

      > span {
        color: #333;
      }
    `;

    return <View>{children}</View>;
  }
);
