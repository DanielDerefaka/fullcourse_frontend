import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import Buttons from "../../components/Cart/Buttons";
import { ALL_SUPPLIERS_CALL } from "../../services/SupplierCall";
const SSAllSuppliers = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await ALL_SUPPLIERS_CALL;
    if (response.data) setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-2 my-3 shadow w3-responsive">
        <table className="table table-striped w-100 ">
          <thead style={{ background: "#4caf50", color: "white" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Cordinates</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Materials</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.data &&
              data.map((entry, index) => {
                return (
                  <tr>
                    <td>Name</td>
                    <td>Layout</td>
                    <td>Cordinates</td>
                    <td>Address</td>
                    <td>State</td>
                    <td>City</td>
                    <td>Material qty</td>
                    <td>Active</td>
                    <td>
                      <div className="btn-group">
                        <Buttons
                          title="View Properties related to this Supplier"
                          classes="btn text-success"
                          text={<FaEye style={{ fontSize: "25px" }} />}
                        />
                        <Buttons
                          title="Block this Supplier"
                          classes="btn text-danger"
                          text={<FaStopCircle style={{ fontSize: "25px" }} />}
                        />
                        <Buttons
                          title="Unblock this Supplier"
                          classes="btn text-primary"
                          text={<FaCheckCircle style={{ fontSize: "25px" }} />}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SSAllSuppliers;
