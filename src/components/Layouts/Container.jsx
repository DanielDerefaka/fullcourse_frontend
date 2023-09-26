import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: #eeed;
  padding: 1rem;
  min-height: 200px;
  border-radius: 10px;
`;

export const SizedContainer = styled.div`
  max-width: 500px;
  background-color: #eee;
  border-radius: 10px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
