import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import logo from "../assets/images/logo.png";

const Logo = ({ size, height }) => {
  const navigate = useNavigate();

  return (
    <img
      src={logo}
      alt="logo"
      style={{
        width: size || 140,
        cursor: "pointer",
        height: height || "auto",
      }}
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default Logo;
