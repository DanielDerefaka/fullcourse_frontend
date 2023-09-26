import React from "react";
import "./index.css";

const ProductSpecification = ({ data }) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="fb">
            <td className="tb">Address </td>
            <td>{data.j_address}</td>
          </tr>
          <tr>
            <td className="tb">Availability </td>
            <td>{data.j_availability}</td>
          </tr>

          <tr className="fb">
            <td>State </td>
            <td> {data.j_state}</td>
          </tr>
          <tr>
            <td>City </td>
            <td> {data.j_city}</td>
          </tr>
          <tr className="fb">
            <td>Property Kind </td>
            <td> {data.j_kind}</td>
          </tr>
          <tr>
            <td>No of Bathrooms</td>
            <td>{data.j_bathrooms}</td>
          </tr>
          <tr className="fb">
            <td>No of Bedrooms </td>
            <td>{data.j_bedrooms}</td>
          </tr>
          <tr>
            <td>Property size</td>
            <td>{data.j_property_size}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecification;
