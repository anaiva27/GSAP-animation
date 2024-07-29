import { Layout } from "Components/Root/Layout";
import { LayoutTest } from "Components/Root/LayoutTest";
import { LayoutTestCopy } from "Components/Root/LayoutTestCopy";
import React from "react";
import { Routes as Router, Route, useNavigate } from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Route path="/test" element={<LayoutTestCopy />} />
      <Route path="/GSAP-animation/test" element={<LayoutTest />} />
      <Route path="/GSAP-animation/" element={<Layout />} />
    </Router>
  );
};
