import React from "react";
import "../w3.css";
import thumbnail from "../assets/images/estate.jpeg";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PlanCard from "../components/models/Plans/PlanCard";
import NoData from "../components/NoData";
import { dummy_property } from "../data/dummy_properties";
import { FaCartPlus, FaHeart } from "react-icons/fa";

import InfoComponent from "../components/InfoComponent";
import CatFilter from "../components/Cards/CatFilter";

export const IconTexts = () =>{
  return(
    <div>
      <FaCartPlus /><span>Add to Cart</span>
    </div>
  )
}

const Material = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    property: dummy_property,
  });

  

  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <div id="estate">
      <div className="w3-container estate body">
        <InfoComponent title={"Materials"} />
        <CatFilter />

        <div className="row w3-margin-top">
          
            {data.property && data.property?.length >= 1 ? (
              data.property.map((estate) => {
                return (
                  <>
                  <PlanCard
                    key={estate.j_id}
                    title='Building Material'
                    description={estate.j_desc}
                    src={thumbnail}
                    btnClass='btn btn-light'
                    price='80,000'
                    btnTxt={<IconTexts />}
                    btnClass2='btn btn-success btn-block d-block'
                    icon={<FaHeart className="m-0 text-success" style={{fontSize: '15px'}} />}
                  />
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
    
  );
};

export default Material;
