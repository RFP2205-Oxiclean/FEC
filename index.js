import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
// import '/src/assets/fontawesome/js/fontawesome'
// import '/src/assets/fontawesome/js/solid'
// import '/src/assets/fontawesome/js/regular'
// import '/src/assets/fontawesome/js/brands'
import "./src/assets/fontAwesome/js/all.js";
import "./src/assets/fontAwesome/css/all.css";

// reactDom.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
