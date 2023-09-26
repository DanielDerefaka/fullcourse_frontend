import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verify_otp } from "../features/auth/authSlice";
import { CurvedButton } from "./Buttons/CurvedButton";
import OTPInput, { ResendOTP } from "otp-input-react";
import styled from "styled-components";
import SuccessModal from "./SuccessComponent/SuccessModal";
import SuccessDisplay from "./SuccessComponent/SuccessDisplay";

const EmailAuthComponent = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const authorize = (e) => {
    e.preventDefault();

    //do validation

    if (!otp || otp.length < 4) return;

    dispatch(
      verify_otp({
        otp,
        email: localStorage.getItem("email"),
      })
    );
  };
  return (
    <>
      {isSuccess === false && (
        <Container>
          <div className="top">
            <h1>You're doing great</h1>

            <h5>Enter the code sent to your email to verify your account</h5>
          </div>
          <div className="middle">
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={4}
              otpType="text"
              disabled={false}

              // secure
            />

            {isLoading === false && (
              <CurvedButton onClick={authorize}> Verify</CurvedButton>
            )}

            {isLoading && <>Loading...</>}
            {isError && (
              <>
                <p>{message}</p>
              </>
            )}
          </div>
        </Container>
      )}

      {isSuccess && (
        <div>
          <SuccessModal
            isOpen={isSuccess}
            header
            title={"Successful"}
            redirect_to="login"
          >
            <SuccessDisplay message={"You are verified"} />
          </SuccessModal>
        </div>
      )}
    </>
  );
};

export default EmailAuthComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;

  .top {
    width: 100%;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-weight: 900;
    }
  }
  .middle {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;
    flex: 4;
    gap: 30px;
  }
`;
