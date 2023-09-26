import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ItemImageComponent from "../components/ImageGallery/ItemImageComponent";
import ItemHeading from "../components/ItemOverview/ItemHeading";
import ItemOverview from "../components/ItemOverview/ItemOverview";
import ShopModel from "../components/models/ShopModel";
import NoData from "../components/NoData";
import Spinner from "../components/Spinner";
import { API_URL } from "../constants/types";
import { GetItemByID } from "../features/shop/shopAction";
import { FaInbox } from "react-icons/fa";
import Details from "../components/Find/Details";
import { showPropertyByID } from "../features/property/estateActions";
import PropertyOverview from "../components/PropertyOverview/PropertyOverview";
import ProductSpecification from "../components/Find/Index";
import LandPropertyDetail from "../components/LandPropertyDetail";
import HousePropertyDetail from "../components/HousePropertyDetail";

const PropertyDetails = ({ images }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [error, setError] = useState({
    value: "",
    message: "",
  });

  const { loading } = useSelector((state) => state.shop);

  const fetchData = async () => {
    const response = await dispatch(showPropertyByID(id));

    console.log(response.payload);

    if (!response.payload) {
      setError({
        value: true,
        message: "No data ",
      });

      return;
    }
    setItem(response.payload);
    setError({});
  };
  useEffect(() => {
    // dispatch action here
    fetchData();
  }, []);

  if (loading) {
    <>
      <Spinner />
    </>;
  }

  return (
    <>
      {item?.j_type === "House" && <HousePropertyDetail item={item} />}

      {item?.j_type === "Land" && (
        <>
          <LandPropertyDetail item={item} />
        </>
      )}
    </>
  );
};

export default PropertyDetails;
