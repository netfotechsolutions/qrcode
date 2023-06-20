import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./App.css";
import "./utils/fonts/trade-gothic-bold-condensed-20.ttf";
import { useSelector } from "react-redux";

import { AzureAD } from "react-aad-msal";
import { authProvider } from "./configurations/authProvider";

import { googleAnalytics } from "./configurations/googleAnalyticsConfig";
import AzureRoutes from "./components/azure/AzureRoutes";

import { Login } from "./components/authentication/Login";

import { useNavigate, useSearchParams } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import okta_config from "./configurations/okta_config";
import Routes from "./components/okta/Routes";

const oktaAuth = new OktaAuth(okta_config.oidc);
function App() {
  const navigate = useNavigate();
  const oktaAuthSate = useSelector((state) => state.auth.oktaAuth);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [account, setAccount] = useState("");
  const [searchParams] = useSearchParams();

  const oktaCallbackUrl = searchParams.get("code");

  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  //okta auth token and flag
  const oktaAuthentication = localStorage.getItem("oktaAuthentication");

  //azure auth token and flag
  const azureToken = sessionStorage.getItem(
    `msal.${process.env.REACT_APP_CLIENT_ID}.idtoken`
  );
  const azure_acces_token = new URLSearchParams(window.location.hash).get("#id_token");
  const azureTokenLocal = localStorage.getItem(
    `msal.${process.env.REACT_APP_CLIENT_ID}.idtoken`
  );
  const azurelocalflag = localStorage.getItem("azureAuth");

  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (
      azureToken ||
      azureTokenLocal ||
      azurelocalflag === "true" ||
      azure_acces_token
    ) {
      setShowLoginModal(false);
      setAccount("azure");
    } else if (
      oktaCallbackUrl ||
      oktaAuthSate ||
      oktaAuthentication === "true"
    ) {
      setShowLoginModal(false);
      setAccount("okta");
    }
  },[azure_acces_token, azureToken, azureTokenLocal, azurelocalflag, oktaCallbackUrl, oktaAuthSate, oktaAuthentication]);

  const onChangeAccount = (radioVal) => {
    setAccount(radioVal);
  };

  return (
    <>
      <Login
        visible={showLoginModal}
        account={account}
        onChangeAccount={onChangeAccount}
      />
      {account === "okta" ? (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <Routes />
        </Security>
      ) : account === "azure" ? (
        <AzureAD provider={authProvider} forceLogin={true}>
          <AzureRoutes />
        </AzureAD>
      ) : null}
    </>
  );
}

export default App;
