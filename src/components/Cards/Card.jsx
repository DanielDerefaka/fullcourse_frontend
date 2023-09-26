import React from "react";
import { FaChartLine } from "react-icons/fa";
import styled from "styled-components";

const Card = ({ title, count, color }) => {
  return (
    <CardContainer color={color}>
      <div className="card-main">
        <div className="card-top">
          <FaChartLine className="" />
          <span class=""> {count || 0} </span>
        </div>
        <div className="card-bottom">
          <p> {title || "title"}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  margin: 1rem 0rem;
  max-width: 400px;
  height: 200px;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#eee"};

  .card-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .card-top {
      font-weight: bold;
      font-size: 2rem;
    }

    .card-bottom {
      font-weight: 700;
      color: #333;
      font-size: 1.5rem;
    }
  }
`;
