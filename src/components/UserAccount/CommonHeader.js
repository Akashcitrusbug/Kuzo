import React, { useState, useEffect } from "react";
import headerLogo from "../../assets/images/logo.png";
import userStaticImage from "../../assets/images/icons/default-user-image.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";
import { getUrl } from "../../Urls/urls";
import { get, put } from "../../Urls/requests";

function CommonHeader() {
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [userData, setuserData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });
  const element = document.querySelector(".header-div");
  const handlePageScroll = () => {
    if (element && offset >= 190) {
      element.classList.add("header-bgcolor");
      element.classList.add("slideInDown");
      element.classList.add("animated");
    }
    if (element && offset < 50) {
      element.classList.remove("header-bgcolor");
      element.classList.remove("slideInDown");
      element.classList.remove("animated");
    }
  };

  const [isDropdownOpen, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    console.log("inii");
    logout();
    history.push("/");
  };

  const userListDetails = () => {
    let url = getUrl("profile-details");
    let token = localStorage.getItem("token");
    // console.log(url);
    return get(`${url}`, `${token}`)
      .then((response) => {
        console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              setuserData(data);
            }
            break;
          case 400:
            console.log("400 error");
            break;
          default:
            console.log("default error");
        }
      })
      .catch((error) => {
        console.log("in catch");
      });
  };
  console.log("user list detials", userData.credit );
  useEffect(() => {
    userListDetails();
  }, []);
  return (
    <header>
      <div
        className="header-div header-black-div header-div2 clearfix"
        onScroll={handlePageScroll()}
      >
        <div className="inner-top-header-div clearfix">
          <div className="container-fluid container-fluid-max1920">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="header-container">
                  <div className="logo-div">
                    <Link to="/" className="logo_link clearfix">
                      {" "}
                      <img
                        src={headerLogo}
                        className="img-fluid logo_img main-logo"
                        alt="logo"
                      />
                    </Link>
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
                          data-original-title="Menu"
                        >
                          <i className="menu-bars menu-icon"></i>
                        </a>
                      </div>

                      <div className="nav-div clearfix" id="mySidenav">
                        <a
                          href="javascript:void(0)"
                          className="closebtn"
                          onclick="closeNav()"
                        >
                          &times;
                        </a>

                        <div className="row-nav-div">
                          <div className="left-side">
                            <ul className="nav ullist-inline" id="nav-res">
                              <li>
                                <Link to="/browse" className="nav-link">
                                  Browse
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="nav-link">
                                  Registered
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="right-side">
                            <div className="view-credit-btn-nav">
                              <button className="btn btn-credit-view-nav">
                                <span className="count-text">{userData.credit}</span>
                                <span className="span-icon">
                                  {" "}
                                  <i className="bg-custom-icon credit-icon-active"></i>
                                </span>
                                <span className="span-text">GET CREDITS</span>
                              </button>
                            </div>
                            <div className="user-drop-down">
                              <div className="dropdown drop-left dropdown-custom-top">
                                <Link
                                  className="btn btn-default dropdown-toggle"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLink"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded={
                                    isDropdownOpen ? "true" : "false"
                                  }
                                  onClick={handleDropdown}
                                >
                                  <div className="user-profile">
                                    <div className="user-img">
                                      <img
                                        src={userStaticImage}
                                        className="user-top-image"
                                        alt="user image"
                                      />
                                    </div>
                                  </div>
                                </Link>
                                <div
                                  className={`dropdown-menu ${
                                    isDropdownOpen ? "show" : ""
                                  }`}
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  {isDropdownOpen ? (
                                    <ul>
                                      <li>
                                        <Link
                                          to="/account-summary"
                                          className="dropdown-item"
                                        >
                                          Account
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          className="dropdown-item"
                                          to="/"
                                          onClick={handleLogoutClick}
                                        >
                                          Logout
                                        </Link>
                                      </li>
                                    </ul>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
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
  );
}
export default CommonHeader;
