import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { reset } from "../../features/auth/authSlice";

const SuccessModal = ({ isOpen, children, header, title, redirect_to }) => {
  const { isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/" + redirect_to);
      }
    }, 3000);

    return () => {
      dispatch(reset());
    };
  });
  function toggle() {
    setModal(!modal);
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default SuccessModal;
