import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../common/Header/Header";
import banner from "../../utils/images/header_img/step_6_final.png"
import { stepVIData } from "./stepVIData";
import { renderButtons } from "../helper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import parse from "html-react-parser";

//import icons
import { TbMailForward } from "react-icons/tb";
import { RiPrinterCloudLine, RiFolderTransferLine } from "react-icons/ri";
import { CgSoftwareDownload } from "react-icons/cg";
import { Footer } from "../../common/footer/Footer";

//import pdf
import missing_software from "../../utils/content/french/Missing_Software-fr.pdf";
import favourites from "../../utils/content/french/Transfer_Favorites-fr.pdf";
import pstFiles from "../../utils/content/french/Transfer_Files_PSTs-fr.pdf";
import xerroxPrinter from "../../utils/content/french/XWC_Setup-fr.pdf";

import missing_software_e from "../../utils/content/Missing Software-e.pdf";
import favourites_e from "../../utils/content/Transfer_Favorites-e.pdf";
import pstFiles_e from "../../utils/content/Transfer_Files_PSTs-e.pdf";
import xerroxPrinter_e from "../../utils/content/XWC_SETUP-e.pdf";

const StepVI = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");
  const langEnglish = language.toLowerCase() === "english";
  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepVIData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepVIData.french);
    }
  }, [language]);

  return (
    <>
      <Header
        img={banner}
        title={content.header}
        badgeValue={content.badgeValue}
      />
      <div className="ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8">
        {renderButtons(content?.btnInfo, true)}
        <h2 className="text-center frutiger_bold">{content.p1}</h2>
        <p>{parse(content.p2 ? content.p2 : "")}</p>
        <ul>
          {content?.bullet_list?.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
        </ul>
        <p>
          <b>{content.p3}</b>
        </p>
        <div className="grid text-center flex justify-content-center gap-3 mt-4">
          <a
            href={langEnglish ? missing_software_e : missing_software}
            className="col-8 md:col-2 lg:col-2 bg-color hover:shadow-8 anchor-style"
            download
          >
            <div className="grid text-white p-2">
              <div className="col-12">
                <CgSoftwareDownload className="text-6xl" />
              </div>
              <div className="col-12">{content.option1}</div>
            </div>
          </a>
          <a
            href={langEnglish ? favourites_e : favourites}
            className="col-8 md:col-2 lg:col-2 bg-color hover:shadow-8 anchor-style"
            download
          >
            <div className="grid text-white p-2">
              <div className="col-12">
                <RiFolderTransferLine className="text-6xl" />
              </div>
              <div className="col-12">{content.option2}</div>
            </div>
          </a>
          <a
            href={langEnglish ? pstFiles_e : pstFiles}
            className="col-8 md:col-2 lg:col-2  bg-color hover:shadow-8 anchor-style"
            download
          >
            <div className="grid text-white p-2">
              <div className="col-12">
                <TbMailForward className="text-6xl" />
              </div>
              <div className="col-12">{content.option3}</div>
            </div>
          </a>
          <a
            href={langEnglish ? xerroxPrinter_e : xerroxPrinter}
            className="col-8 md:col-2 lg:col-2  bg-color hover:shadow-8 anchor-style"
            download
          >
            <div className="grid text-white p-2">
              <div className="col-12">
                <RiPrinterCloudLine className="text-6xl" />
              </div>
              <div className="col-12">{content.option4}</div>
            </div>
          </a>
        </div>

        <div className="mt-6 text-center">
          <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, true)}
      </div>
    </>
  );
};
export default StepVI;
