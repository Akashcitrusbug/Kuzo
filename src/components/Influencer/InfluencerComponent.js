import React from "react";
import FooterComponent from "../Index/FooterComponent";
import HeaderComponent from "../Index/HeaderComponent";
import SimilarIconsSection from "./SimilarIconsSection";
import influencer_img1 from "../../assets/images/influencer-icons-image.jpg";
import class_icon1 from "../../assets/images/icons/class-icon.png";
import meet_greet_icon from "../../assets/images/icons/meet-and-greet-icon.png";
import influencer_img2 from "../../assets/images/influencer-ule-01.jpg";
import influencer_img3 from "../../assets/images/influencer-ule-02.jpg";
import { Link } from "react-router-dom";

function InfluencerComponent() {
  return (
    <div id="wrapper" classNameName="wrapper home-wrapper">
      <HeaderComponent />
      <div className="main-middle-area">
        <section
          className="single-influencer-icons-section"
          id="single-influencer-icons-section"
        >
          <div className="single-influencer-icons-div">
            <div className="container container-1100">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="single-influencer-icons-info-div">
                    <div className="single-influencer-icons-info-row">
                      <div className="left-thumb-div">
                        <div className="video-icon-box-relative">
                          <div
                            className="thumb-box"
                            data-toggle="modal"
                            data-target="#video-influencer-modal"
                          >
                            <img
                              src={influencer_img1}
                              className="img-fluid img-responsive"
                              alt="icons"
                            />
                          </div>
                          <div
                            className="abs-br-div"
                            data-toggle="modal"
                            data-target="#video-influencer-modal"
                          >
                            <a href="#" className="abs-icon-link">
                              <span className="rounded-icon-span">
                                {" "}
                                <i className="bg-custom-icon play-video-icon"></i>{" "}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="right-content-div">
                        <div className="content-div">
                          <div className="content-top-row">
                            <div className="left-content">
                              <h3>
                                <a href="#" className="link">
                                  Emma Scott
                                </a>
                              </h3>
                              <p>Instagram</p>
                            </div>
                          </div>

                          <div className="desc-row">
                            <p>
                              Emma Scott has built an impressive Instagram
                              following, inspiring millions of young women
                              around the world to pursue their dreams. In her
                              Instagram, she connects with her fans in a unique
                              way that captures their hearts. She understands
                              the today’s trends and leverages the tools of
                              social media to spread her positive message.
                            </p>

                            <div className="button-div">
                              <Link
                                to="/book-influencer"
                                className="btn btn-common-primary"
                              >
                                SEE CLASSES
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="single-influencer-right-side">
                      <div className="single-influencer-right-side-inner">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="dark-card-info-box">
                              <div className="dark-card-info-inner">
                                <div className="dark-card-info-header">
                                  <h3>What does Emma offer?</h3>
                                </div>
                                <div className="dark-card-info-body">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                      <div className="icons-card-info-box">
                                        <div className="img-thumb">
                                          <img
                                            src={class_icon1}
                                            className="img-fluid img-responsive img-className"
                                            alt="icon"
                                          />
                                        </div>
                                        <div className="desc-content-div">
                                          <h4>
                                            {" "}
                                            <a href="#" className="link">
                                              Live classNamees
                                            </a>
                                          </h4>
                                          <p>
                                            Attend a 1 hour className, learn,
                                            and ask questions.
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                      <div className="icons-card-info-box">
                                        <div className="img-thumb">
                                          <img
                                            src={meet_greet_icon}
                                            className="img-fluid img-responsive img-mg"
                                            alt="icon"
                                          />
                                        </div>
                                        <div className="desc-content-div">
                                          <h4>
                                            {" "}
                                            <a href="#" className="link">
                                              Meet and Greet
                                            </a>
                                          </h4>
                                          <p>
                                            Talk with her, take photos, and ask
                                            questions.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="similar-icons-card-root">
                              <div className="heading-div">
                                <div className="heading-inner-div">
                                  <h3>Upcoming Live Events</h3>
                                </div>
                              </div>

                              <div className="pre-available-div">
                                <h4>See What's Available</h4>
                              </div>

                              <div className="inner-similar-icons">
                                <div className="general-card-root-icons">
                                  <div className="row mlr-20">
                                    <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                      <div className="general-card-box-icons">
                                        <div className="general-card-inner-box">
                                          <div className="top-image-thumb-div">
                                            <div className="img-thumb">
                                              <img
                                                src={influencer_img2}
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
                                                <span className="count-text">
                                                  45
                                                </span>{" "}
                                              </button>
                                            </div>
                                          </div>

                                          <div className="content-div">
                                            <div className="content-top-row">
                                              <div className="center-content">
                                                <h3>
                                                  <a href="#" className="link">
                                                    The Journey to Becoming an
                                                    Instagram Influencer
                                                  </a>
                                                </h3>
                                                <div className="time-row">
                                                  <div className="time-box">
                                                    <span className="icon-span">
                                                      <i className="bg-custom-icon calendar-icon"></i>
                                                    </span>
                                                    <span className="text">
                                                      Sat, Sept 12 &#x2022;
                                                      10:00 AM EST
                                                    </span>
                                                  </div>
                                                </div>
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
                                      <div className="general-card-box-icons">
                                        <div className="general-card-inner-box">
                                          <div className="top-image-thumb-div">
                                            <div className="img-thumb">
                                              <img
                                                src={influencer_img3}
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
                                                <span className="count-text">
                                                  90
                                                </span>{" "}
                                              </button>
                                            </div>
                                          </div>

                                          <div className="content-div">
                                            <div className="content-top-row">
                                              <div className="center-content">
                                                <h3>
                                                  <a href="#" className="link">
                                                    Meet and Greet with Emma
                                                  </a>
                                                </h3>
                                                <div className="time-row">
                                                  <div className="time-box">
                                                    <span className="icon-span">
                                                      <i className="bg-custom-icon calendar-icon"></i>
                                                    </span>
                                                    <span className="text">
                                                      Sat, Sept 12 &#x2022; 9:00
                                                      AM EST
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="spots-row">
                                              <div className="spots-box">
                                                <span className="icon-span">
                                                  <i className="bg-custom-icon spot-alert-icon"></i>
                                                </span>
                                                <span className="text">
                                                  Only 1 spots left
                                                </span>
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

                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="dark-card-desc-box">
                              <div className="dark-card-info-inner">
                                <div className="dark-card-info-header">
                                  <h3>How does this work?</h3>
                                </div>
                                <div className="dark-card-info-body">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="desc-content-div">
                                        <p>
                                          Emma Scott has built an impressive
                                          Instagram following, inspiring
                                          millions of young women around the
                                          world to pursue their dreams. In her
                                          Instagram, she connects with her fans
                                          in a unique way that captures their
                                          hearts. She understands the today’s
                                          trends and leverages the tools of
                                          social media to spread her positive
                                          message.
                                        </p>
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
          </div>
        </section>

        <SimilarIconsSection />
      </div>
      <FooterComponent />
    </div>
  );
}
export default InfluencerComponent;
