import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { DialogWrapper } from "../dialog/DialogWrapper";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { oktaAuthAction } from "../../stores/actions/authAction";
import { useDispatch } from "react-redux";

export const OktaNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const oktaLogout = async () => oktaAuth.signOut();
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  useEffect(() => {
    if (authState?.isAuthenticated) {
      dispatch(oktaAuthAction(true));
      localStorage.setItem("oktaAuthentication", "true");
    }
  }, [authState], dispatch);

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
      label: `Welcome
        ${userInfo?.name}`,
      icon: "pi pi-fw pi-user",
      visible: authState?.isAuthenticated ? true : false,
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
      visible: authState?.isAuthenticated ? true : false,
      command: () => {
        if (authState.isAuthenticated) {
          oktaLogout();
          localStorage.clear();
          localStorage.setItem("oktaAuthentication", "false");
          dispatch(oktaAuthAction(false));
        }
      },
    },
  ];

  const oncloseDialog = () => {
    setShowLanguageDialog(false);
  };

  return (
    <>
      {showLanguageDialog ? (
        <DialogWrapper oncloseDialog={oncloseDialog} />
      ) : (
        <></>
      )}
     {authState?.isAuthenticated ? <Menubar model={items} className="border-noround" /> : <></>} 
    </>
  );
};
