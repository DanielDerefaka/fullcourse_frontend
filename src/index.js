import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "boxicons";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";

AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleReCaptchaProvider
        reCaptchaKey="6Lee9_MjAAAAADSIB6iFyxU5r-TWmedanlCBh812"
        // language="[optional_language]"
        // useRecaptchaNet="[optional_boolean_value]"
        // useEnterprise="[optional_boolean_value]"
        scriptProps={{
          async: false, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: "head", // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
        }}
        container={{
          // optional to render inside custom element
          // element: "[required_id_or_htmlelement]",
          // parameters: {
          //   badge: "[inline|bottomright|bottomleft]", // optional, default undefined
          theme: "dark", // optional, default undefined
          // },
        }}
      >
        <App />
      </GoogleReCaptchaProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
