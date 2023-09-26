import React from "react";
import "../w3.css";
import "../components/models/ShopModel/shop.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AllMaterials, showProperties } from "../features/shop/shopAction";
import InfoComponent from "../components/InfoComponent";
import ShopModel from "../components/models/ShopModel";
import Location from "../components/models/Location";
import { Col, Row } from "reactstrap";
import setAuthToken from "../utils/setAuthToken";
import NoData from "../components/NoData";
import { API_URL } from "../constants/types";
const Shop = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await setAuthToken(localStorage.getItem("token"));
    const items = await dispatch(AllMaterials());
    setData(items.payload);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="shop-item">
      <div className=" ">
        <InfoComponent title={"Shop"} />
<Location />
        <div className="w3-row w3-margin-top">
          <Row>
            {/* {!data || data.length === 0 || (data === null && <p>no data</p>)} */}
            {data.length >= 1 ? (
              data.map((estate) => {
                return (
                  <ShopModel
                    key={estate.id}
                    item_name={estate.item_name}
                    src={`${API_URL}/${estate.image}`}
                    amount={estate.amount}
                    availability={estate.quantity}
                    id={estate.id}
                  />
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Shop;
