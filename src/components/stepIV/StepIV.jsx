import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../utils/images/header_img/banner_step_4_final.jpg";
import { stepIVData } from "./stepIVData";
import { Header } from "../../common/Header/Header";
import { renderButtons } from "../helper";
import { ImageWrapper } from "../../common/img/ImageWrapper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";
import parse from "html-react-parser";
//images
import img_1 from "../../utils/images/step_4_img/img_1.png";
import img_2 from "../../utils/images/step_4_img/img_2.png";
import img_3 from "../../utils/images/step_4_img/img_3.png";
import img_4 from "../../utils/images/step_4_img/img_4.png";
import img_5 from "../../utils/images/step_4_img/img_5.png";
import img_6 from "../../utils/images/step_4_img/img_6.png";

import f_img_1 from "../../utils/images/step_4_img/french/f_img_1.png";
import f_img_2 from "../../utils/images/step_4_img/french/f_img_2.png";
import f_img_3 from "../../utils/images/step_4_img/french/f_img_3.png";
import f_img_4 from "../../utils/images/step_4_img/french/f_img_4.png";
import f_img_5 from "../../utils/images/step_4_img/french/f_img_5.png";
import f_img_6 from "../../utils/images/step_4_img/french/f_img_6.png";

const StepIV = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);
  const langEnglish = language.toLowerCase() === "english";
  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepIVData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepIVData.french);
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
        <h2 className="text-center frutiger_bold">{content.title}</h2>
        <p></p>
        <ol>
          {content?.number_bullets?.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
        </ol>
        <h2 className="frutiger_bold">{content.title2}</h2>
        <p>{parse(content.step1 ? content.step1 : "")}</p>
        <div className="flex justify-content-center">
          <div className="w-full md:w-8 lg:w-6">
            <img
              className="responsive"
              src={langEnglish ? img_1 : f_img_1}
              height="700"
              width="100%"
              alt="img"
            ></img>
          </div>
        </div>
        <p>{parse(content.step2 ? content.step2 : "")}</p>
        <ImageWrapper path={langEnglish ? img_2 : f_img_2} />
        <p>{parse(content.step3 ? content.step3 : "")}</p>
        <ImageWrapper path={langEnglish ? img_3 : f_img_3} />
        <p>{parse(content.step4 ? content.step4 : "")}</p>
        <ImageWrapper path={langEnglish ? img_4 : f_img_4} />
        <p>{parse(content.step5 ? content.step5 : "")}</p>
        <ImageWrapper path={langEnglish ? img_5 : f_img_5} />
        <p>{parse(content.step6 ? content.step6 : "")}</p>
        <ImageWrapper path={langEnglish ? img_6 : f_img_6} />
        <div className="mt-6 text-center">
          <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, true)}
      </div>
    </>
  );
};
export default StepIV;
