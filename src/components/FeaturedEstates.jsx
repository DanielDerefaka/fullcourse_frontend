import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import { DummyEstates } from "../data/dummy_properties";
import { showProperties } from "../features/property/estateActions";
import { ColumnContainer } from "./Layouts/ColumnContainer";
import Estates from "./models/Estates";
import Plans from "./models/Plans/Plans";

const FeaturedEstates = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    property: [],
  });

  const fetchData = async () => {
    const properties = await dispatch(showProperties());

    setData({
      property: properties.payload,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        {data.property && (
          <>
            <div>
              <p>Featured Estates</p>
            </div>
            <Row>
              {data.property &&
                data.property.map((estate, index) => {
                  return (
                    <Plans
                      key={estate.j_id}
                      title={estate.j_title}
                      description={estate.j_desc}
                    />
                  );
                })}
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default FeaturedEstates;
