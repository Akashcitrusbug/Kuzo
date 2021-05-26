import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/fonts/helvetica-neue/helvetica-neue-font.css";
import "../assets/fonts/ptsans-narrow/ptsans-narrow.css";
import "../assets/fonts/futura/futura-font.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import "../assets/css/custom-tab-style.css";
import "../assets/css/general-card-style.css";
import "../assets/css/authentication-style.css";
import "../assets/css/home-style.css";
import "../assets/css/style.css";
import "../assets/css/influencer-style.css";
import HeaderComponent from "../components/Index/HeaderComponent";
import IndexComponent from "../components/Index/IndexComponent";
import FooterComponent from "../components/Index/FooterComponent";
import CommonHeader from "../components/UserAccount/CommonHeader";
import { isAuthenticated } from "../services/auth";

function IndexPage() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      {isAuthenticated() ? <CommonHeader /> : <HeaderComponent />}
      <IndexComponent />
      <FooterComponent />
    </div>
  );
}

export default IndexPage;
