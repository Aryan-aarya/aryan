import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Arya from "./Arya";
// import Comp from "./Comp";
import NestedList from "./New";

// to call a variable we use {} in react 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <App /> 
      <NestedList />
    </div>
  </React.StrictMode>
);
