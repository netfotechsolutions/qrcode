import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import { RequiredAuth } from "./SecureRoute";
import { OktaNavBar } from "../../common/Navigationbar/OktaNavbar";
import Checklist from "../checklist/Checklist";
import Step1 from "../stepI/Step1";
import StepII from "../stepII/StepII";
import { Home } from "../Home";
import { StepThreeForm } from "../stepIII/StepThreeForm";
import StepIV from "../stepIV/StepIV";
import StepFive from "../stepV/StepFive";
import StepVI from "../stepVI/StepVI";
import StepVII from "../stepVII/StepVII";

const AppRoutes = () => {
  return (
    <>
      <OktaNavBar />
      <Routes>
        <Route path="/" element={<RequiredAuth />}>
          <Route path="" Component={Home} />
        </Route>
        <Route path="/checklist" element={<RequiredAuth />}>
          <Route path="" Component={Checklist} />
        </Route>
        <Route path="/step1" element={<RequiredAuth />}>
          <Route path="" Component={Step1} />
        </Route>
        <Route path="/step2" element={<RequiredAuth />}>
          <Route path="" Component={StepII} />
        </Route>
        <Route path="/step3" element={<RequiredAuth />}>
          <Route path="" Component={StepThreeForm} />
        </Route>
        <Route path="/step4" element={<RequiredAuth />}>
          <Route path="" Component={StepIV} />
        </Route>
        <Route path="/step5" element={<RequiredAuth />}>
          <Route path="" Component={StepFive} />
        </Route>
        <Route path="/step6" element={<RequiredAuth />}>
          <Route path="" Component={StepVI} />
        </Route>
        <Route path="/step7" element={<RequiredAuth />}>
          <Route path="" Component={StepVII} />
        </Route>
        <Route exact path="login/callback" element={<LoginCallback />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
