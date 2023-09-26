import React, { useEffect } from "react";
import boximg from "./img/image 2.svg";
import { FaMapMarkerAlt, FaBed, FaBath, FaRoad } from "react-icons/fa";
import ViewButton from "./ViewButton";
import Estate2 from "../models/Estate2";
import { useDispatch, useSelector } from "react-redux";
import { showProperties } from "../../features/property/estateActions";
import Estate3 from "../models/Estate3";

const Card = () => {
  const { properties } = useSelector((state) => state.property);
  const dispatch = useDispatch();
  const fetchProperties = async () => {
    const property = dispatch(showProperties());
  };
  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <div>
      <div className="row">
        {/* populate from the property controller */}

        {properties && properties.length > 0
          ? properties.map((property, index) => (
              <>
                {property.j_status !== null && property.j_type === "Land" && (
                  <Estate2 image={boximg} payload={property} />
                )}

                {property.j_status !== null && property.j_type === "House" && (
                  <Estate3 image={boximg} payload={property} />
                )}
              </>
            ))
          : null}
      </div>
      <ViewButton />
    </div>
  );
};

export default Card;
