import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../public/favicon-48x48.png";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)