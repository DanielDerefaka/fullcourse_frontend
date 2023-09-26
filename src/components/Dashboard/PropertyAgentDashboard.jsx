import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VERIFY_PROPERTY_AGENT_CALL } from "../../services/PropertyCalls";
import { FlatButton } from "../Buttons/FlatButton";

const PropertyAgentDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [response, setResponse] = useState({});

  const addProperty = () => {
    navigate("/add-property");
  };

  const verifyuser = async () => {
    const response = await VERIFY_PROPERTY_AGENT_CALL();
    console.log(response);

    if (response && response.data) setResponse(response.data);
  };

  useEffect(() => {
    verifyuser();
  }, []);
  return (
    <div>
      {response && response.success && (
        <FlatButton onClick={addProperty}>ADD A PROPERTY</FlatButton>
      )}

      {response && response.errCode === 303 && (
        <FlatButton> Complete Your profile</FlatButton>
      )}
      {response && response.errCode === 301 && (
        <>
          <h1> Your profile have not been verified, contact support </h1>
        </>
      )}
    </div>
  );
};

export default PropertyAgentDashboard;
