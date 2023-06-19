import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { Header } from "../../common/Header/Header";
import banner from "../../utils/images/header_img/step5_banner_final.jpg"
import { stepVData } from "./stepV";
import { renderButtons } from "../helper";
import { ImageWrapper } from "../../common/img/ImageWrapper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";

//images
import img_1 from "../../utils/images/step_5_img/img_1.png";
import img_2 from "../../utils/images/step_5_img/img_2.png";
import img_3 from "../../utils/images/step_5_img/img_3.png";
import img_4 from "../../utils/images/step_5_img/img_4.png";
import img_5 from "../../utils/images/step_5_img/img_5.png";
import icon from "../../utils/images/step_5_img/icon.jpg";
import f_img_2 from "../../utils/images/step_5_img/french/f_img_2.png";

const StepFive = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepVData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepVData.french);
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
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <p className="mb-4">
          {content.p3}
          <img src={icon} alt="icon" height="25px" width="25px"></img>{" "}
          {content.p3_e}
        </p>
        <ImageWrapper path={img_1} />
        <p className="mb-4">{parse(content.p4 ? content.p4 : "")}</p>
        <ImageWrapper
          path={language.toLowerCase() === "english" ? img_2 : f_img_2}
        />
        <p className="mb-4"> {parse(content.p5 ? content.p5 : "")}</p>
        <ImageWrapper path={img_3} />
        <p>{parse(content.p6 ? content.p6 : "")}</p>
        <p>{content.p7}</p>
        <p className="mb-4">{parse(content.p8 ? content.p8 : "")}</p>
        <ImageWrapper path={img_4} />
        <p className="mt-4">
          {content.p9}{" "}
          <img src={img_5} alt="img5" height="25px" width="25px"></img>{" "}
          {content.p9_e}{" "}
        </p>
        <div className="mt-6 text-center">
          <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, true)}
      </div>
    </>
  );
};
export default StepFive;
