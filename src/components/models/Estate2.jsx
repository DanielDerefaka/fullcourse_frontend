import React from "react";
import { FaBath, FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Estate2 = ({ image, payload }) => {
  const navigate = useNavigate();
  //destructure the payload
  const {
    j_purchase_type,
    j_agent_ref,
    j_cordinates,
    j_condition,
    j_furnishing,
    j_property_size,
    j_specifications,
    j_property_type,
    j_price,
    j_availabilty,
    j_title,
    j_desc,
    j_state,
    j_city,
    j_address,
    j_img,
  } = payload;
  return (
    <Container
      className="col-md-3"
      onClick={() => navigate(`/property/${payload.j_id}`)}
    >
      <img src={image} style={{ width: "100%" }} alt="house" />

      <PropertyName> {j_title}</PropertyName>
      <div className="price">
        <div>
          <p>
            <FaMapMarkerAlt /> {`${j_city}, ${j_state}`}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Estate2;
const Container = styled.div`
  cursor: pointer;
  img {
    width: 10px;
    border-radius: 10px;
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .house-features {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    flex-direction: row;
  }
`;

const PropertyName = styled.p`
  font-weight: 600 !important;
  font-size: 1.5rem !important;

  color: #333 !important;
  font-size: 1rem;
  padding: 0.5rem 0rem;
`;

const Image = styled.img`
  border-radius: 5px;
  margin: 0.5rem 0rem;
`;
