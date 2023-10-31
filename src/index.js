import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Arya from "./Arya";
import Comp from "./Comp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Comp text="Welcome" />

      <App />
      <Arya />
    </div>
  </React.StrictMode>
);
