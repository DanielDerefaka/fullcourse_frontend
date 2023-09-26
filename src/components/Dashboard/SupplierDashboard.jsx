import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VERIFY_SUPPLIER_CALL } from "../../services/SupplierCall";
import { FlatButton2 } from "../Buttons/FlatButton2";
import Sellers_hub from "../../pages/Sellers_hub";
import { Modal } from "@mui/material";
import ModalButton from "../SupplierContent/ModalButton";
import ModalMain from "../SupplierContent/ModalMain";

const SupplierDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const [response, setResponse] = useState({});

  const verifyuser = async () => {
    const response = await VERIFY_SUPPLIER_CALL();
    console.log(response);

    if (response && response.data) setResponse(response.data);
  };

  useEffect(() => {
    verifyuser();
  }, []);

  return (
    <div>
      {response && response.errCode === 301 && (
        <>
          <p>you need to complete your profile</p>
          <ModalButton/>
          <ModalMain /> 
          {/* <Sellers_hub /> */}
        </>
      )}

      {response && response.errCode === 303 && (
        <>
          <p>Your account is not yet verified</p>
        </>
      )}

      {response && response.errCode === 305 && (
        <>
          <p>You Dont have a Business Profile </p>
        <ModalButton/>
      <ModalMain />
        </>
      )}
    </div>
  );
};

export default SupplierDashboard;
