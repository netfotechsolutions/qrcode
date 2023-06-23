import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Menubar } from "primereact/menubar";
import { DialogWrapper } from "../dialog/DialogWrapper";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { oktaAuthAction } from "../../stores/actions/authAction";
import { useDispatch } from "react-redux";
import { navBarData } from "./navigationBarData";

export const OktaNavBar = () => {
  const language = useSelector((state) => state.language.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [content, setContent] = useState("");

  const [userInfo, setUserInfo] = useState(null);
  const oktaLogout = async () => oktaAuth.signOut();

  useEffect(()=>{
    if (language.toLowerCase() === "english") {
      setContent(navBarData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(navBarData.french);
    }
  }, [language])

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
  }, [authState, dispatch]);

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
      label: `${content.welcome} :
        ${userInfo?.name}`,
      icon: "pi pi-fw pi-user",
      visible: authState?.isAuthenticated ? true : false,
    },
    {
      label: content.logout,
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