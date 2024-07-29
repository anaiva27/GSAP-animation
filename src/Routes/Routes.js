import { Layout } from "Components/Root/Layout";
import { LayoutTest } from "Components/Root/LayoutTest";
import React from "react";
import { Routes as Router, Route, useNavigate } from "react-router-dom";

export const Routes = () => {
  return (
    <Router basename="/GSAP-animation">
      <Route path="/test" element={<LayoutTest />} />
      <Route path="/GSAP-animation/" element={<Layout />} />
    </Router>
  );
};
