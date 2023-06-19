import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../utils/images/header_img/banner_step3_final.png";
import { stepIIIData } from "./stepIIIData";
import { Header } from "../../common/Header/Header";
import { renderButtons } from "../helper";
import { ImageWrapper } from "../../common/img/ImageWrapper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import parse from "html-react-parser";

//images
import img_1 from "../../utils/images/step_3_img/image-01.jpeg";
import img_2 from "../../utils/images/step_3_img/image-02.jpeg";
import img_3 from "../../utils/images/step_3_img/img_3.png";
import img_4 from "../../utils/images/step_3_img/img_4.png";
import img_5 from "../../utils/images/step_3_img/img_5.png";

import f_img_1 from "../../utils/images/step_3_img/french_img/f_img_1.png";
import f_img_2 from "../../utils/images/step_3_img/french_img/f_img_2.png";
import f_img_3 from "../../utils/images/step_3_img/french_img/f_img_3.png";
import f_img_4 from "../../utils/images/step_3_img/french_img/f_img_4.png";
import f_img_5 from "../../utils/images/step_3_img/french_img/f_img_5.png";

import { Footer } from "../../common/footer/Footer";

export const StepThreeForm = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);
  const langEnglish = language.toLowerCase() === "english";
  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepIIIData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepIIIData.french);
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
        <p>{content.p1}</p>
        <p>{parse(content.p2 ? content.p2 : "")}</p>
        <div className="flex justify-content-center">
          <div className="w-full md:w-8 lg:w-7">
            <ImageWrapper path={langEnglish ? img_1 : f_img_1} />
          </div>
        </div>
        <ul>
          {content?.bullet_list?.map((ele) => {
            return <li key={ele}>{parse(ele ? ele : "")}</li>;
          })}
        </ul>
        <div className="flex justify-content-center mb-4">
          <div className="w-full md:w-8 lg:w-7">
            <ImageWrapper path={langEnglish ? img_2 : f_img_2} />
          </div>
        </div>
        <h2 className="frutiger_bold">{content.title2}</h2>
        <p>{content.p3}</p>
        <p>{parse(content.p4 ? content.p4 : "")}</p>
        <div className="flex justify-content-center mb-4">
          <div className="w-full md:w-8 lg:w-7">
            <ImageWrapper path={langEnglish ? img_3 : f_img_3} />
          </div>
        </div>
        <p>{parse(content.p5 ? content.p5 : "")}</p>
        <div className="flex justify-content-center mb-4">
          <div className="w-full md:w-8 lg:w-10">
            <ImageWrapper path={langEnglish ? img_4 : f_img_4} />
          </div>
        </div>
        {/* <ImageWrapper path={langEnglish ? img_4 : f_img_4} /> */}
        <h2 className="frutiger_bold">{content.title3}</h2>
        <p>{parse(content.p6 ? content.p6 : "")}</p>
        <p>{content.p7}</p>
        <p>{parse(content.p8 ? content.p8 : "")}</p>
        <p>{parse(content.p9 ? content.p9 : "")}</p>
        <ul>
          {content?.bullet_list2?.map((ele) => {
            return <li key={ele}>{parse(ele ? ele : "")}</li>;
          })}
        </ul>
        <p>{content.p10}</p>
        <div className="flex justify-content-center mb-4">
          <div className="w-full md:w-8 lg:w-10">
            <ImageWrapper path={langEnglish ? img_5 : f_img_5} />
          </div>
        </div>
        {/* <ImageWrapper path={langEnglish ? img_5 : f_img_5} /> */}
        <div className="mt-6 text-center">
          <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, true)}
      </div>
    </>
  );
};
