import { Badge } from "primereact/badge";

export const Header = (props) => {
  return (
    <>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(${props.img})`,
          height: "300px",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <Badge
            className="border-noround bg-color pl-4 pr-4 mt-6 lg:mt-8 md:mt-8"
            value={props.badgeValue}
          ></Badge>
          <div className="gothic_bold_condensed text-white text-5xl font-semibold mt-4 md:mt-4 lg:mt-6">
            {" "}
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
};
