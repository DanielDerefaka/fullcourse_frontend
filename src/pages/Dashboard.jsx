import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FlexContainer from "../components/Layouts/FlexContainer";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import Card from "../components/Cards/Card";
import Gap from "../components/Gap";
import AllPropertyTable from "../components/AllPropertyTable";
import Fab from "@mui/material/Fab";
import Navi from "@mui/material/Fab";
import { AddBusiness } from "@mui/icons-material";
import { FlatButton } from "../components/Buttons/FlatButton";
import RegularDashboard from "../components/Dashboard/RegularDashboard";
import PropertyAgentDashboard from "../components/Dashboard/PropertyAgentDashboard";
import SupplierDashboard from "../components/Dashboard/SupplierDashboard";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      {user && user.j_class === "SUPPLIER" && (
        <>
          <SupplierDashboard />
        </>
      )}

      {user && user.j_class === "PROPERTY-AGENT" && (
        <>
          <PropertyAgentDashboard />
        </>
      )}
      {user && user.j_class === "REGULAR" && (
        <>
          <RegularDashboard />
        </>
      )}

      {!user && <p>User doesn't have any class</p>}

      {/* <Fab variant="extended">Navigate</Fab> */}
    </>
  );
}

export default Dashboard;
