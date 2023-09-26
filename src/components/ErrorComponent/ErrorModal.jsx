import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { reset } from "../../features/auth/authSlice";

const ErrorModal = ({ isOpen, children, header, title }) => {
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        toggle();
        // navigate("/dashboard");
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
      <Modal isOpen={isOpen || modal} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default ErrorModal;
