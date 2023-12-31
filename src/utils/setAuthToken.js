import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["access-token"] = token;
    // axios.defaults.headers.common["access-token"] = han[1];
  } else {
    // delete axios.defaults.headers.common['x-auth-token'];
    delete axios.defaults.headers.common["access-token"];
  }
};

export default setAuthToken;
