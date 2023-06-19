import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import banner from "../../utils/images/header_img/checklist_banner_final.jpg"
import { checkListData } from "./checklistData";
import { Header } from "../../common/Header/Header";
import { renderButtons } from "../helper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";
import { DataView } from "primereact/dataview";

const Checklist = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(checkListData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(checkListData.french);
    }
  }, [language]);

  const itemTemplate = (arr) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column sm:align-items-start gap-3">
              <b>
                {arr.id}) {arr.description}
              </b>
              <ul className="mt-0 ml-2 md:ml:4 lg:ml-6">
                {arr?.bullet_list?.map((ele) => {
                  return (
                    <li key={ele}>
                      {typeof ele !== "object" ? (
                        parse(ele)
                      ) : (
                        <>
                          {parse(ele.bu_list_p)}{" "}
                          <Link to={ele.link}>{ele.link_text}</Link>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        {renderButtons(content?.btnInfo, false)}
        <div className="mt-2">
          {content.subtitle} <Link to="/step1">{content.subtitle_link}</Link>{" "}
          {content.subtitle_e}{" "}
        </div>
        <div className="mt-2">
          <DataView
            value={content.arr}
            header={content.tableHeader}
            itemTemplate={itemTemplate}
          />
          <br />
          <DataView
            value={content.arr2}
            header={content.tableHeader_2}
            itemTemplate={itemTemplate}
          />
        </div>
        <div className="mt-6 text-center">
          {content.footer} <Footer content={content} />
        </div>
        {renderButtons(content?.btnInfo, false)}
      </div>
    </>
  );
};

export default Checklist;
