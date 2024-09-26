import { AME } from "Components/Root/AME";
import { Audi } from "Components/Root/Audi";
import { Layout } from "Components/Root/Layout";
import { LayoutTest } from "Components/Root/LayoutTest";
import { LayoutTestCopy } from "Components/Root/LayoutTestCopy";
import React from "react";
import { Routes as Router, Route, useNavigate } from "react-router-dom";

export const Routes = () => {
  return (
    <Router basename="GSAP-animation">
      <Route path="/test" element={<LayoutTestCopy />} />
      <Route path="/ame" element={<AME />} />
      <Route path="/test" element={<LayoutTest />} />
      <Route path="/GSAP-animation/test" element={<LayoutTest />} />
      <Route path="/GSAP-animation/" element={<Layout />} />
      <Route path="/audi/" element={<Audi />} />
    </Router>
  );
};
