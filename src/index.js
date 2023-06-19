import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./stores";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
  { reducer: rootReducer },
  window?._REDUX_DEVTOOLS_EXTENSION_ && window?._REDUX_DEVTOOLS_EXTENSION_()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
