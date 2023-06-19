import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../utils/images/header_img/banner_step2_final.png";
import { stepIIData } from "./stepIIData";
import { Header } from "../../common/Header/Header";
import { renderButtons } from "../helper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";
import parse from "html-react-parser";

const StepII = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepIIData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepIIData.french);
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
        <div className="text-center">
          <h2 className="text-center frutiger_bold">{content.title}</h2>
        </div>
        <div className="flex justify-content-center">
          <ul>
            {content?.bullet_list?.map((ele) => {
              return <li key={ele}>{parse(ele ? ele : "")}</li>;
            })}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, true)}
      </div>
    </>
  );
};

export default StepII;
