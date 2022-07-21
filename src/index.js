import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/fontAwesome/js/all.min.js";
import "./assets/fontAwesome/css/all.min.css";
import "/public/";

// reactDom.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
