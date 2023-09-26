import React from "react";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import Buttons from "../../components/Cart/Buttons";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../../components/Cards/Card";
import { a11yProps, TabPanel } from "../../components/TabPanel";
import SSAllSuppliers from "./SSAllSuppliers";

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ALL SUPPLIERS" {...a11yProps(0)} />
          <Tab label="VERIFIED" {...a11yProps(1)} />
          <Tab label="UNVERIFIED" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SSAllSuppliers />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

const SSupplierList = () => {
  return (
    <div>
      <div className="py-2">
        <div className="py-4">
          <h5>All Suppliers</h5>
        </div>
        <div className="row py-4">
          <Card count="6" title="ALL SUPPLIERS" />
          <Card count="6" title="VERIFIED SUPPLIERS" />
          <Card count="6" title="UNVERIFIED SUPPLIERS" />
        </div>

        <BasicTabs />

        {/* <div className="p-2 my-3 shadow w3-responsive">
          <table className="table table-striped w-100 ">
            <thead style={{ background: "#4caf50", color: "white" }}>
              <tr>
                <th>S/N</th>
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
              <tr>
                <td>S/N</td>
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
              <tr>
                <td>S/N</td>
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
              <tr>
                <td>S/N</td>
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
              <tr>
                <td>S/N</td>
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
              <tr>
                <td>S/N</td>
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
              <tr>
                <td>S/N</td>
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
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default SSupplierList;
