import React from "react";
import CommonHeader from "./CommonHeader";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";

function ChangePassword() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      <CommonHeader />
      <div className="main-middle-area profile-middle-area">
        <section className="profile-section" id="profile-section">
          <div className="profile-div">
            <div className="profile-root-div">
              <div className="profile-root-row">
                <ProfileAccountLeftMenu />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ChangePassword;
