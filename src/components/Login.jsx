import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate } from "react-router-dom";
import { Modal } from "reactstrap";
import logo from "../assets/images/logo.png";
import ErrorDisplay from "../components/ErrorComponent/ErrorDisplay";
import ErrorModal from "../components/ErrorComponent/ErrorModal";
import FormInput from "../components/Inputs/FormInput";
import Logo from "../components/Logo";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }

    return () => {
      dispatch(reset());
    };
  }, []);
  const handleInputOnchange = (e) => {
    //destructure
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        console.log("nothing");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // minor validation
    if (!email && !password) {
      return;
    }

    const payload = {
      email,
      password,
    };
    const call = await dispatch(login(payload));
    console.log(call);
  };
  function toggle() {
    setModal(!modal);
  }

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="w3-padding-64">
          <div className="w3-round" id="create">
            <form className="w3-padding" onSubmit={submit}>
              <div className="w3-center w3-margin-bottom">
                <Logo />
                <h3 className="w3-text-green">
                  <b>Login</b>
                </h3>
              </div>
              <FormInput
                title={"Email"}
                type="email"
                value={email}
                id={"email"}
                onChange={handleInputOnchange}
              />
              <FormInput
                title={"Password"}
                type="password"
                value={password}
                id={"password"}
                onChange={handleInputOnchange}
              />
              <div className="w3-center w3-margin-top w3-margin-bottom">
                <input
                  type="submit"
                  value="Login"
                  className="w3-round w3-green w3-button"
                />
                <br />
                <div className="w3-margin-bottom">
                  <p className="w3-small">
                    Don't have an account yet?{" "}
                    <Link to="/signup" className="w3-text-green">
                      Signup now
                    </Link>{" "}
                  </p>
                  <p className="w3-small w3-margin-bottom">
                    <Link to="/">Forgot your password?</Link>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
