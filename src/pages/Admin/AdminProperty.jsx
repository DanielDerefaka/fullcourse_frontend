import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Form1 from "../../components/AdminAddProperty/Form1";
import Initialize from "../../components/AdminAddProperty/Initialize";
import AllPropertyTable from "../../components/AllPropertyTable";
import Gap from "../../components/Gap";
import FormInput from "../../components/Inputs/FormInput";
import FormInput2 from "../../components/Inputs/FormInput2";

const AdminProperty = () => {
  const { stage } = useSelector((state) => state.new_property);
  const [payload, setPayload] = useState({});
  return (
    <div className="w3-container body">
      {stage === 0 && <Initialize />}
      {stage === 1 && <Form1 />}

      <Gap />

      <AllPropertyTable />
    </div>
  );
};

export default AdminProperty;
