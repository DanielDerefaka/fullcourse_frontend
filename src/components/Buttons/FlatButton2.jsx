import styled from "styled-components";

export const FlatButton2 = styled.button`
  /* background-color: #a8ce9b; */
  background: transparent;
  border-radius: 4px;
  border: none;
  padding: 0.5rem 1rem;
  color: #a8ce9b;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  width: ${(props) => props.width || ""};
  cursor: pointer;
  height: 40px;
`;
