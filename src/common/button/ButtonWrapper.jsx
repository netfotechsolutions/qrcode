import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export const ButtonWrapper = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="w-full border-noround button"
        style={{ backgroundColor: "#0078d4" }}
        label={props.text}
        onClick={() => navigate(props.to)}
      />
    </>
  );
};
