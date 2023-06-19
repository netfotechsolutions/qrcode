import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { AzureAD } from "react-aad-msal";
import { DialogWrapper } from "../dialog/DialogWrapper";
import { authProvider } from "../../configurations/authProvider";
import { useNavigate } from "react-router-dom";

export const Navigationbar = () => {
  const navigate = useNavigate();
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [logoutFlg, setLogoutFlg] = useState(false);
  const [azureAuthenticate, setAzureAuthenticate] = useState(false);

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Select Language",
      icon: "pi pi-fw pi-language",
      command: () => {
        setShowLanguageDialog(true);
      },
    },
    {
      label: "Navigation Menu",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      items: [
        {
          label: "Checklist",
          icon: "pi pi-fw pi-align-left",
          command: () => {
            navigate("/checklist");
          },
        },
        {
          label: "Step 1",
          icon: "pi pi-fw pi-align-right",
          command: () => {
            navigate("/step1");
          },
        },
        {
          label: "Step 2",
          icon: "pi pi-fw pi-align-center",
          command: () => {
            navigate("/step2");
          },
        },
        {
          label: "Step 3",
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step3");
          },
        },
        {
          label: "Step 4",
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step4");
          },
        },
        {
          label: "Step 5",
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step5");
          },
        },
        {
          label: "Step 6",
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step6");
          },
        },
        {
          label: "Step 7",
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step7");
          },
        },
      ],
    },
    {
      label: "",
      icon: "pi pi-fw pi-user",
      visible: azureAuthenticate ? true : false,
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
      visible: azureAuthenticate ? true : false,
      command: () => {
        setLogoutFlg(true);
      },
    },
  ];

  const oncloseDialog = () => {
    setShowLanguageDialog(false);
  };

  return (
    <>
      <AzureAD provider={authProvider}>
        {({ logout, authenticationState, error, accountInfo }) => {
          if (authenticationState === "Authenticated") {
            items[3].label = `Welcome: ${accountInfo?.account?.name}`;
            setAzureAuthenticate(true);
            localStorage.setItem("azureAuth", "true");
            if (logoutFlg) {
              logout();
              localStorage.clear();
              localStorage.setItem("azureAuth", "false");
            }
          }
        }}
      </AzureAD>
      {showLanguageDialog ? (
        <DialogWrapper oncloseDialog={oncloseDialog} />
      ) : (
        <></>
      )}
      <Menubar model={items} className="border-noround" />
    </>
  );
};
