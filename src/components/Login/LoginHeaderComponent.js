import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo.png';

function LoginHeaderComponent() {
  return (
    <>
      <header>
        <div className="header-div header-black-div clearfix">
          <div className="inner-top-header-div clearfix">
            <div className="container-fluid container-fluid-max1920">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="header-container">
                    <div className="logo-div">
                      <Link to="/" className="logo_link clearfix">
                        <img
                          src={headerLogo}
                          className="img-fluid logo_img main-logo"
                          alt="logo"
                        />
                      </Link>
                    </div>

                    <nav className="nav-center-div"></nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LoginHeaderComponent;
