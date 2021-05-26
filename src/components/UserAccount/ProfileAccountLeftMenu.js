import React from "react";
import { Link } from "react-router-dom";

function ProfileAccountLeftMenu() {
  return (
    <div className="left-side-div">
      <div className="left-side-inner">
        <div className="vertical-tabs-header">
          <ul className="nav vertical-nav-tabs">
            <li className="nav-item">
              <Link
                to="/account-summary"
                className={
                  window.location.pathname === "/account-summary"
                    ? "nav-link active show"
                    : "nav-link"
                }
              >
                <span className="center-txt">
                  <span className="icon-center">
                    {" "}
                    <i className="bg-custom-icon home-active-icon"></i>{" "}
                  </span>
                  <span className="txt-span">Account summary</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/change-billing"
                className={
                  window.location.pathname === "/change-billing"
                    ? "nav-link active show"
                    : "nav-link"
                }
              >
                <span className="center-txt">
                  <span className="icon-center">
                    {" "}
                    <i className="bg-custom-icon billing-active-icon"></i>{" "}
                  </span>
                  <span className="txt-span">Change Billing</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add-credits"
                className={
                  window.location.pathname === "/add-credits"
                    ? "nav-link active show"
                    : "nav-link"
                }
              >
                <span className="center-txt">
                  <span className="icon-center">
                    {" "}
                    <i className="bg-custom-icon credit-tab-active-icon"></i>{" "}
                  </span>
                  <span className="txt-span">Add Credits</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/change-password"
                className={
                  window.location.pathname === "/change-password"
                    ? "nav-link active show"
                    : "nav-link"
                }
              >
                <span className="center-txt">
                  <span className="icon-center">
                    {" "}
                    <i className="bg-custom-icon password-icon-default"></i>{" "}
                  </span>
                  <span className="txt-span">Change Password</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileAccountLeftMenu;
