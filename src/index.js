import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./styles.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
