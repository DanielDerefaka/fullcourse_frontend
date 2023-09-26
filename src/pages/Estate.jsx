import React from "react";
// import Header from "../components/Header";
import "../w3.css";
import thumbnail from "../assets/images/estate.jpeg";
import SearchEstate from "../components/SearchEstate";
import LocaltionFilter from "../components/LocaltionFilter";
import PriceFilter from "../components/EstateForm2";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { showProperties } from "../features/estate/estateActions";
import { useState } from "react";
import { showProperties } from "../features/property/estateActions";
import Plans from "../components/models/Plans/Plans";
import NoData from "../components/NoData";
import { dummy_property } from "../data/dummy_properties";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

import InfoComponent from "../components/InfoComponent";
import Location from "../components/Cards/Location";
import Estate2 from "../components/models/Estate2";
import Estate3 from "../components/models/Estate3";

import boximg from "../components/Landing/img/image 2.svg";
import { useNavigate } from "react-router-dom";
// import boximg from "./img/image 2.svg";

export const IconText = () => {
  return (
    <div>
      <FaMapMarkerAlt />
      <span>Show on Map</span>
    </div>
  );
};

const Estate = () => {
  const { properties } = useSelector((state) => state.property);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(showProperties());

    console.log(properties, "ammm");
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const showMap = () => {

  //     return(
  //       // <MapContainer />
  //       navigate("/map", {lat: estate.j_id})
  //     )

  // }

  return (
    <div id="estate">
      <div className="w3-container estate body">
        <InfoComponent title={"Properties"} />
        <Location />

        <div className="w3-row w3-margin-top">
          <div className="row">
            {properties?.length >= 1 ? (
              properties.map((property) => {
                return (
                  <>
                    {property.j_type === "Land" && (
                      <Estate2 image={boximg} payload={property} />
                    )}

                    {property.j_type === "House" && (
                      <Estate3 image={boximg} payload={property} />
                    )}
                  </>
                );
              })
            ) : (
              <>
                <NoData />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
