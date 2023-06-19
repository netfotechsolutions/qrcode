import { ButtonWrapper } from "../common/button/ButtonWrapper";
export const renderButtons = (btnInfo, changeStyle) => {
    const clsProperty = changeStyle ? "col-12 md:col-4 lg:col-4" : "col-12 md:col-6 lg:col-6";
    return (
      <>
        <div className="grid mt-4">
          {btnInfo?.map((ele) => {
            return (
              <div key={ele} className={clsProperty}>
                <ButtonWrapper to={ele.to} text={ele.text}/>
              </div>
            );
          })}
        </div>
        <br />
      </>
    );
  };