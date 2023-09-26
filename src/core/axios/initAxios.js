import axios from "axios";

export const base = () => {
  const live = "https://icefish.propertytrade.com.ng";
  const local = "http://localhost:6414";

  return local;
};

const server = axios.create({
  baseURL: base,
});

export default server;
