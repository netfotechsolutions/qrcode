import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Menubar } from "primereact/menubar";
import { AzureAD } from "react-aad-msal";
import { DialogWrapper } from "../dialog/DialogWrapper";
import { authProvider } from "../../configurations/authProvider";
import { useNavigate } from "react-router-dom";
import { navBarData } from "./navigationBarData";

export const Navigationbar = () => {
  const language = useSelector((state) => state.language.language);
  const navigate = useNavigate();
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [logoutFlg, setLogoutFlg] = useState(false);
  const [azureAuthenticate, setAzureAuthenticate] = useState(false);
  const [content, setContent] = useState("");

  useEffect(()=>{
    if (language.toLowerCase() === "english") {
      setContent(navBarData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(navBarData.french);
    }
  }, [language])

  const items = [
    {
      label: content.home,
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: content.selectLanguage,
      icon: "pi pi-fw pi-language",
      command: () => {
        setShowLanguageDialog(true);
      },
    },
    {
      label: content.navigationMenu,
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      items: [
        {
          label: content.checkList,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/checklist");
          },
        },
        {
          label:  content.step1,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step1");
          },
        },
        {
          label: content.step2,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step2");
          },
        },
        {
          label:  content.step3,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step3");
          },
        },
        {
          label: content.step4,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step4");
          },
        },
        {
          label: content.step5,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step5");
          },
        },
        {
          label: content.step6,
          icon: "pi pi-fw pi-align-justify",
          command: () => {
            navigate("/step6");
          },
        },
        {
          label: content.step7,
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
      label: content.logout,
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
            items[3].label = `${content.welcome}: ${accountInfo?.account?.name}`;
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