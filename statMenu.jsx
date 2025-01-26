import React from "react";
import "./statMenu.css";
// import { UserCurrencyConversion } from "./UserCurrencyConvertion";
// import { UserPageToggle } from "./UserPageToggle";

export const UserModule = ({ balance, conversions }) => {
  return (
    <div className="user-module-main">
      <div className="module-container">
        {/* <UserPageToggle /> */}
        <div className="user-balance-text">
          <div className="balance-text-container">
            <h5 className="balance-title thin-text">Your balance</h5>
            <h1 className="balance-title bold-text">₴ {balance}</h1>
          </div>
        </div>

        {/* <UserCurrencyConversion conversions={conversions} /> */}
      </div>
    </div>
  );
};
export default UserModule;
