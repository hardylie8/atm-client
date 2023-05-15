import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import store from "./store";
import { fetchUserData } from "./store/slices/authThunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getToken } from "./utils/HelperFunctions";
import history from "./utils/history";
import "./index.css";

if (getToken()) {
  store.dispatch(fetchUserData());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
