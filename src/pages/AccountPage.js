import React from "react";
// import '../assets/css/bootstrap.min.css';
// import '../assets/fonts/helvetica-neue/helvetica-neue-font.css';
// import '../assets/fonts/ptsans-narrow/ptsans-narrow.css';
// import '../assets/fonts/futura/futura-font.css';
// import '../assets/css/header.css';
// import '../assets/css/general-card-style.css';
import "../assets/css/profile-style.css";
// import '../assets/css/style.css';
import AccountSummary from "../components/UserAccount/AccountSummary";

function AccountPage() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      <AccountSummary />
    </div>
  );
}

export default AccountPage;
