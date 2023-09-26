import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showProperties } from "../features/property/estateActions";

const AllPropertyTable = ({}) => {
  const { properties } = useSelector((state) => state.property);

  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(showProperties());
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h4>Show Properties({properties.length})</h4>
      <table className="w3-table w3-table-all">
        {properties && (
          <>
            <tr className="w3-green">
              {/* <th>S/N</th> */}
              <th>Name</th>
              <th>Layout</th>
              <th>Cordinates</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Kind</th>
            </tr>
            {properties &&
              properties.map((property) => {
                return (
                  <tr key={property.j_id}>
                    {/* <td>{property.j_id}</td> */}
                    <td>{property.j_title}</td>
                    <td>{property.j_layout}</td>
                    <td>{property.j_ip}</td>
                    <td>{property.j_address}</td>
                    <td>{property.j_state}</td>
                    <td>{property.j_city}</td>
                    <td>{property.j_kind}</td>
                  </tr>
                );
              })}
          </>
        )}
      </table>
    </div>
  );
};

export default AllPropertyTable;
