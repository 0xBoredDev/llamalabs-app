import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./css/style.css";
import "./css/ChakraPetch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
