import React from "react";
import { RadioButton } from "primereact/radiobutton";
import { Dialog } from "primereact/dialog";

export const Login = (props) => {
  const { visible, onChangeAccount, account } = props;
  return (
    <>
      <Dialog
        header="Sign In"
        visible={visible}
        // style={{ width: "50vw" }}
        closable={false}
        className="w-11 lg:w-6"
      >
        <span>
          Please select your organization account from below options to login:
        </span>
        <div className="card flex justify-content-center mt-6 mb-6">
          <div className="flex flex-wrap gap-3">
            <div className="flex align-items-center">
              <RadioButton
                inputId="account"
                name="azure"
                value="azure"
                onChange={(e) => onChangeAccount(e.value)}
                checked={account === "azure"}
              />
              <label htmlFor="account" className="ml-2">
                Canada Post/SCI/Innovapost
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="account"
                name="okta"
                value="okta"
                onChange={(e) => onChangeAccount(e.value)}
                checked={account === "okta"}
              />
              <label htmlFor="account" className="ml-2">
                Purolator
              </label>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
