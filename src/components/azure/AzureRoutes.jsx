import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navigationbar } from "../../common/Navigationbar/Navigationbar";
import Checklist from "../checklist/Checklist";
import Step1 from "../stepI/Step1";
import StepII from "../stepII/StepII";
import { Home } from "../Home";
import { StepThreeForm } from "../stepIII/StepThreeForm";
import StepIV from "../stepIV/StepIV";
import StepFive from "../stepV/StepFive";
import StepVI from "../stepVI/StepVI";
import StepVII from "../stepVII/StepVII";

function AzureRoutes() {
  return (
    <>
      <div style={{ backgroundColor: "#eff6fc" }}>
        <Navigationbar />
        <Routes>
          <Route exact path="" Component={Home} />
          <Route path="/checklist" Component={Checklist} />
          <Route path="/step1" Component={Step1} />
          <Route path="/step2" Component={StepII} />
          <Route path="/step3" Component={StepThreeForm} />
          <Route path="/step4" Component={StepIV} />
          <Route path="/step5" Component={StepFive} />
          <Route path="/step6" Component={StepVI} />
          <Route path="/step7" Component={StepVII} />
        </Routes>
      </div>
    </>
  );
}

export default AzureRoutes;
