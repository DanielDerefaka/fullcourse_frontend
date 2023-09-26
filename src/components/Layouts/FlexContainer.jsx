import styled from "styled-components";

const FlexContainer = styled.section`
  width: ${(props) => props.width || "100%"};
  display: flex;
  justify-content: ${(props) => props.justify_content || ""};
  flex-direction: ${(props) => props.orientation || "row"};
  align-items: ${(props) => props.align_items || ""};
  gap: ${(props) => props.gap || "20px"};
  line-height: 1;

  overflow-y: scroll;
`;

export default FlexContainer;
