import React, { useState, useEffect } from "react";
import "boxicons";
import Logo from "../../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/admin_auth/AdminSlice";
import FormInput from "../../components/Inputs/FormInput";

const SAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.admin);

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/dashboard");
    }
  });
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
  return (
    <div>
      <div className="w3-row log-screen w3-card-4 w3-round">
        <div className="w3-half">
          <div className="w3-container w3-padding-48">
            <Logo />
            <h3 className="w3-margin-top">Admin Login</h3>
            <p className="w3-text-grey">Welcome, login to continue</p>
            <form onSubmit={submit} className="">
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

              <input
                type="submit"
                className="w3-block w3-green w3-button w3-round w3-margin-bottom"
                value="Login"
              />
            </form>
          </div>
        </div>
        <div className="w3-half w3-green w3-padding-64">
          <p className="w3-center">
            Welcome to Capital City Development <br /> Signin to explore oure
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SAdminLogin;
