import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Col } from "reactstrap";
import { CurrencyFormatter } from "../../../utils/CurrencyFormatter";
import "./shop.css";

const ShopModel = ({ src, item_name, availability, amount, onClick, id }) => {
  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/item_detail/${id}`);
  };

  return (
    <>
      <Col onClick={openDetails} md={3} style={{ cursor: "pointer" }}>
        <div className="shop-model-container">
          <img src={src} alt="" className="item-image" />
          <div className="w3-padding">
            <p className="item-name">{item_name}</p>
            <p className="item-availabilty">{availability} available </p>
            <p className="item-amount "> {CurrencyFormatter(amount || 1)}</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ShopModel;
