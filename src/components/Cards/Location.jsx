import React from "react";
import { useSelector } from "react-redux";

const Location = () => {
  const { properties } = useSelector((state) => state.property);

  return (
    <div>
      <form
        action=""
        className="row pt-2 shadow-sm rounded mt-3 mb-4"
        style={{ background: "#fafafa" }}
      >
        <p>
          <b>Filter by Location</b>
        </p>
        <div className="col-sm-10 form-group">
          <select name="" id="" className="form-control">
            <option value="">Location</option>

            {properties &&
              properties.map((property) => (
                <>
                  <option value={property.j_state}>{property.j_state}</option>
                </>
              ))}
          </select>
        </div>
        <div className="col-sm-2 form-group">
          <input type="submit" value="Filter" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default Location;
