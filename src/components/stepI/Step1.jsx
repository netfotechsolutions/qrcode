import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { stepIData } from "./stepIData";
import banner from "../../utils/images/header_img/banner_step1_final.jpg"
import { Header } from "../../common/Header/Header";
import { ImageWrapper } from "../../common/img/ImageWrapper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import parse from "html-react-parser";
import { ButtonWrapper } from "../../common/button/ButtonWrapper";

//images
import step_1 from "../../utils/images/step_1_img/step_1.png";
import step_2 from "../../utils/images/step_1_img/step_2.png";
import step_3 from "../../utils/images/step_1_img/step_3.png";
import step_4 from "../../utils/images/step_1_img/step_4.png";
import step5_6 from "../../utils/images/step_1_img/step5_6.png";
import step_7 from "../../utils/images/step_1_img/step_7.png";

import f_step_1 from "../../utils/images/step_1_img/french_img/f_img_1.jpg";
import f_step_2 from "../../utils/images/step_1_img/french_img/f_img_2.png";
import f_step_3 from "../../utils/images/step_1_img/french_img/f_img_3.png";
import f_step_4 from "../../utils/images/step_1_img/french_img/f_img_4.png";
import f_step_5 from "../../utils/images/step_1_img/french_img/f_img_5.jpg";
import f_step_6 from "../../utils/images/step_1_img/french_img/f_img_6.png";
import { Footer } from "../../common/footer/Footer";

function Step1() {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);
  const langEnglish = language.toLowerCase() === "english";
  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(stepIData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(stepIData.french);
    }
  }, [language]);

  const renderButtons = () => {
    return (
      <>
        <div className="grid mt-4">
          {content?.btnInfo?.map((ele, index) => {
            const cls =
              index === 0
                ? "col-12 md:col-6 lg:col-4"
                : "col-12 md:col-3 lg:col-4";
            return (
              <div key={ele} className={cls}>
                <ButtonWrapper to={ele.to} text={ele.text} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <Header
        img={banner}
        title={content.title}
        badgeValue={content.badgeValue}
      />
      <div className="ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8">
        {renderButtons()}
        <h2 className="text-center frutiger_bold">{content.title}</h2>
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <p>{parse(content.note_1 ? content.note_1 : "")}</p>
        <p>{parse(content.step1 ? content.step1 : "")}</p>
        <ImageWrapper path={langEnglish ? step_1 : f_step_1} />
        {/* step 2  */}
        <br />
        <p>{parse(content.step2 ? content.step2 : "")}</p>
        <ImageWrapper path={langEnglish ? step_2 : f_step_2} />
        {/* step 3  */}
        <br />
        <p>{parse(content.step3 ? content.step3 : "")}</p>
        <ImageWrapper path={langEnglish ? step_3 : f_step_3} />
        {/* step 4  */}
        <br />
        <p>{parse(content.step4 ? content.step4 : "")}</p>
        <ImageWrapper path={langEnglish ? step_4 : f_step_4} />
        {/* step 5 and 6  */}
        <br />
        <p>{parse(content.step_5_6 ? content.step_5_6 : "")}</p>
        <ImageWrapper path={langEnglish ? step5_6 : f_step_5} />
        {/* step 7  */}
        <br />
        <p>{parse(content.step7 ? content.step7 : "")}</p>
        <ImageWrapper path={langEnglish ? step_7 : f_step_6} />
        <br />
        <p> {parse(content.note_2 ? content.note_2 : "")}</p>
        <ol type="1">
          {content?.number_bullets?.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
        </ol>
        <div className="mt-6 pb-2 text-center">
          <Footer content={content} />
        </div>
        {renderButtons()}
      </div>
    </>
  );
}

export default Step1;
