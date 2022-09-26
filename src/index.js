import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextApi } from "./components/ContextApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>
);

reportWebVitals();
