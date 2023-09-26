import React from "react";
import { DummyEstates } from "../data/dummy_properties";

const AdminProperty = () => {
  return (
    <div className="w3-container body">
      <h4>Add Property</h4>
      <form action="" className="w3-card w3-round">
        <div className="w3-row">
          <div className="w3-third w3-padding">
            <label htmlFor="">Name of Property</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
          <div className="w3-third w3-padding">
            <label htmlFor="">Type</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
          <div className="w3-third w3-padding">
            <label htmlFor="">Kind</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-third w3-padding">
            <label htmlFor="">Coordinates</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
          <div className="w3-third w3-padding">
            <label htmlFor="">State</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
          <div className="w3-third w3-padding">
            <label htmlFor="">City</label>
            <input
              type="text"
              className="w3-border w3-input w3-border-light-grey w3-round"
            />
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-twothird">
            <div className="w3-half w3-padding">
              <label htmlFor="">Address</label>
              <input
                type="text"
                className="w3-border w3-input w3-border-light-grey w3-round"
              />
            </div>
            <div className="w3-half w3-padding">
              <label htmlFor="">Layout</label>
              <input
                type="text"
                className="w3-border w3-input w3-border-light-grey w3-round"
              />
            </div>
            <div className="w3-padding">
              <label htmlFor="">Description</label>
              <input
                type="text"
                className="w3-border w3-input w3-border-light-grey w3-round"
              />
            </div>
          </div>
          <div className="w3-third w3-padding ">
            <label htmlFor="">Image</label>
            <div className="w3-padding-32 w3-border w3-border-light-grey w3-round">
              <input
                type="file"
                className=" w3-input w3-border-white w3-round"
              />
            </div>
          </div>
        </div>
        <div className="w3-padding">
          <input
            type="submit"
            value="Add Property"
            className="w3-button w3-green w3-round"
          />
        </div>
      </form>
      <br />
      <h4>Show Properties</h4>
      <table className="w3-table w3-table-all">
        <tr className="w3-green">
          <th>S/N</th>
          <th>Name</th>
          <th>Layout</th>
          <th>Cordinates</th>
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Kind</th>
        </tr>
        {DummyEstates.map((property) => {
          return (
            <tr>
              <td>{property.j_id}</td>
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
      </table>
    </div>
  );
};

export default AdminProperty;
