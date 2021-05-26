import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo.png';

const HeaderComponent = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });
  const element = document.querySelector('.header-div');
  const handlePageScroll = () => {
    if (element && offset >= 190) {
      element.classList.add('header-bgcolor');
      element.classList.add('slideInDown');
      element.classList.add('animated');
    }
    if (element && offset < 50) {
      element.classList.remove('header-bgcolor');
      element.classList.remove('slideInDown');
      element.classList.remove('animated');
    }
  };
  return (
    <>
      <header>
        <div className="header-div clearfix" onScroll={handlePageScroll()}>
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
                      {/* <a className="" href="index.html">
                          
                        </a> */}
                    </div>

                    <nav className="nav-center-div">
                      <div className="top-nav1">
                        <div className="cd-shadow-layer"></div>
                        <div className="nav-m-bar">
                          <a
                            onclick="openNav()"
                            className="opennav"
                            data-placement="bottom"
                            title=""
                            data-original-title="Menu">
                            <i className="menu-bars menu-icon"></i>
                          </a>
                        </div>
                        <div className="nav-div clearfix" id="mySidenav">
                          <a
                            href="javascript:void(0)"
                            className="closebtn"
                            onclick="closeNav()">
                            &times;
                          </a>
                          <div className="right-side">
                            <ul className="nav ullist-inline" id="nav-res">
                              <li className="search-box-main-li">
                                <div className="search-box-main-root">
                                  <div className="input-group">
                                    <span className="input-group-addon">
                                      <i className="bg-custom-icon search-icon"></i>
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control search-control"
                                      placeholder="Search..."
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="/login"
                                  className="nav-link login-in-btn">
                                  LOG IN
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
