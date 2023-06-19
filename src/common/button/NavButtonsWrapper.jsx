import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export const NavButtonsWrapper = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(props.content.link)}
        className="w-11 md:w-9 lg:w-4 border-noround button border-transparent text-left"
        style={{ backgroundColor: "#0078d4" }}
        label={props.content.btnText}
      />
      <br />
      <br />
    </>
  );
};
