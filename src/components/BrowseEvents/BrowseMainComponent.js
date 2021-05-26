import React from "react";
import CommonHeader from "../UserAccount/CommonHeader";
import event_img1 from "../../assets/images/event/event-img1.jpg";
import event_img2 from "../../assets/images/event/event-img2.jpg";
import event_img3 from "../../assets/images/event/event-img3.jpg";
import event_img4 from "../../assets/images/event/event-img4.jpg";
import { Link } from "react-router-dom";
import HeaderComponent from "../Index/HeaderComponent";
import { isAuthenticated } from "../../services/auth";

function BrowseMainComponent() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      {isAuthenticated() ? <CommonHeader /> : <HeaderComponent />}
      <div className="main-middle-area dashboard-middle-area">
        <section className="dashboard-section" id="dashboard-section">
          <div className="dashboard-div">
            <div className="container-fluid container-fluid-1820 plr-20">
              <div className="row mlr-20">
                <div className="col-lg-12 col-md-12 plr-20">
                  <div className="icons-collapsible-card-root">
                    <div className="heading-div">
                      <div className="heading-inner-div">
                        <h3>Browse</h3>
                        <p>Get better recommendations the more you attend.</p>
                      </div>
                    </div>

                    <div className="filter-category-root-div">
                      <div className="filter-category-inner">
                        <ul className="filter-list-ul">
                          <li className="active">
                            <a href="#" className="filter-link">
                              ALL
                            </a>
                          </li>
                          <li>
                            <a href="#" className="filter-link">
                              YouTuber
                            </a>
                          </li>
                          <li>
                            <a href="#" className="filter-link">
                              Tik Tok
                            </a>
                          </li>
                          <li>
                            <a href="#" className="filter-link">
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a href="#" className="filter-link">
                              Celebrity
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="inner-collapsible-icons">
                      <div className="general-card-root">
                        <div className="row mlr-20">
                          <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                            <div className="general-card-box">
                              <div className="general-card-inner-box">
                                <div className="top-image-thumb-div">
                                  <div className="img-thumb">
                                    <img
                                      src={event_img1}
                                      className="img-fluid img-responsive"
                                      alt="event"
                                    />
                                  </div>
                                  <div className="top-button-div">
                                    <button className="btn btn-like">
                                      {" "}
                                      <span className="span-icon">
                                        {" "}
                                        <i className="bg-custom-icon credit-icon-active"></i>
                                      </span>{" "}
                                      <span className="count-text">45</span>{" "}
                                    </button>
                                  </div>
                                </div>

                                <div className="content-div">
                                  <div className="content-top-row">
                                    <div className="left-content">
                                      <h3>
                                        <Link to="/influencer" className="link">
                                          The Journey to Becoming an Instagram
                                          Influencer
                                        </Link>
                                      </h3>
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-icon"></i>
                                          </span>
                                          <span className="text">
                                            Sat, Sept 12 &#x2022; 10:00 AM EST
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content">
                                      <h4>
                                        <a href="#" className="link">
                                          Emma Scott
                                        </a>
                                      </h4>
                                      <p>Instagram</p>
                                    </div>
                                  </div>
                                  <div className="spots-row">
                                    <div className="spots-box">
                                      <span className="icon-span">
                                        <i className="bg-custom-icon spot-alert-icon"></i>
                                      </span>
                                      <span className="text">
                                        Only 3 spots left
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                            <div className="general-card-box">
                              <div className="general-card-inner-box">
                                <div className="top-image-thumb-div">
                                  <div className="img-thumb">
                                    <img
                                      src={event_img2}
                                      className="img-fluid img-responsive"
                                      alt="event"
                                    />
                                  </div>
                                  <div className="top-button-div">
                                    <button className="btn btn-like">
                                      {" "}
                                      <span className="span-icon">
                                        {" "}
                                        <i className="bg-custom-icon credit-icon-active"></i>
                                      </span>{" "}
                                      <span className="count-text">38</span>{" "}
                                    </button>
                                  </div>
                                </div>

                                <div className="content-div">
                                  <div className="content-top-row">
                                    <div className="left-content">
                                      <h3>
                                        <a href="#" className="link">
                                          How I Grew my YouTube Channel to
                                          12,000,000 subscribers
                                        </a>
                                      </h3>
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-icon"></i>
                                          </span>
                                          <span className="text">
                                            Sun, Sept 13 &#x2022; 1:00 PM EST
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content">
                                      <h4>
                                        <a href="#" className="link">
                                          Will King
                                        </a>
                                      </h4>
                                      <p>YouTuber</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                            <div className="general-card-box">
                              <div className="general-card-inner-box">
                                <div className="top-image-thumb-div">
                                  <div className="img-thumb">
                                    <img
                                      src={event_img3}
                                      className="img-fluid img-responsive"
                                      alt="event"
                                    />
                                  </div>
                                  <div className="top-button-div">
                                    <button className="btn btn-like">
                                      {" "}
                                      <span className="span-icon">
                                        {" "}
                                        <i className="bg-custom-icon credit-icon-active"></i>
                                      </span>{" "}
                                      <span className="count-text">41</span>{" "}
                                    </button>
                                  </div>
                                </div>

                                <div className="content-div">
                                  <div className="content-top-row">
                                    <div className="left-content">
                                      <h3>
                                        <a href="#" className="link">
                                          Success in Hollywood as an
                                          Asian-American
                                        </a>
                                      </h3>
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-icon"></i>
                                          </span>
                                          <span className="text">
                                            Tues, Sept 15 &#x2022; 8:00 PM EST
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content">
                                      <h4>
                                        <a href="#" className="link">
                                          Carlos Fang
                                        </a>
                                      </h4>
                                      <p>Actor</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                            <div className="general-card-box">
                              <div className="general-card-inner-box">
                                <div className="top-image-thumb-div">
                                  <div className="img-thumb">
                                    <img
                                      src={event_img4}
                                      className="img-fluid img-responsive"
                                      alt="event"
                                    />
                                  </div>
                                  <div className="top-button-div">
                                    <button className="btn btn-like">
                                      {" "}
                                      <span className="span-icon">
                                        {" "}
                                        <i className="bg-custom-icon credit-icon-active"></i>
                                      </span>{" "}
                                      <span className="count-text">29</span>{" "}
                                    </button>
                                  </div>
                                </div>

                                <div className="content-div">
                                  <div className="content-top-row">
                                    <div className="left-content">
                                      <h3>
                                        <a href="#" className="link">
                                          My Rise to 1,000,000,000 Plays on Tik
                                          Tok
                                        </a>
                                      </h3>
                                      <div className="time-row">
                                        <div className="time-box">
                                          <span className="icon-span">
                                            <i className="bg-custom-icon calendar-icon"></i>
                                          </span>
                                          <span className="text">
                                            Wed, Sept 16 &#x2022; 6:00 PM EST
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content">
                                      <h4>
                                        <a href="#" className="link">
                                          Adrian Hale
                                        </a>
                                      </h4>
                                      <p>Tik Tok</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default BrowseMainComponent;
