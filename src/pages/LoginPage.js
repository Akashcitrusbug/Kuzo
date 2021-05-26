import React from 'react';
import '../assets/css/header.css';
import '../assets/css/bootstrap.min.css';
import '../assets/fonts/helvetica-neue/helvetica-neue-font.css';
import '../assets/fonts/ptsans-narrow/ptsans-narrow.css';
import '../assets/fonts/futura/futura-font.css';
import '../assets/css/footer.css';
import '../assets/css/custom-tab-style.css';
import '../assets/css/general-card-style.css';
import '../assets/css/authentication-style.css';
// import '../assets/css/home-style.css';
import '../assets/css/style.css';
import LoginComponent from '../components/Login/LoginComponent';

function LoginPage() {
  return (
    <>
      <LoginComponent />
    </>
  );
}

export default LoginPage;
