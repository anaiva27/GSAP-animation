import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import { Layout } from "./Components/Root/Layout";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
