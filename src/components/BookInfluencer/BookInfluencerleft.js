import React from "react";
import img1 from "../../assets/images/event/event-img1.jpg";
import class_icon from "../../assets/images/icons/class-icon.png";

function BookInfluencerleft() {
  return (
    <>
      {" "}
      <div className="col-lg-6 col-md-6 book-influencer-left-side">
        <section
          className="book-influencer-section"
          id="book-influencer-section"
        >
          <div className="book-influencer-div">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>
                      This event starts in{" "}
                      <span
                        className="text countdown-text"
                        id="countdown-timer"
                      ></span>
                    </h3>
                  </div>
                </div>

                <div className="bi-icons-card-root">
                  <div className="bi-similar-icons">
                    <div className="general-card-root">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 general-grid-6">
                          <div className="general-card-box">
                            <div className="general-card-inner-box">
                              <div className="top-image-thumb-div">
                                <div className="img-thumb">
                                  <img
                                    src={img1}
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
                                      <a
                                        href="influencer.html"
                                        className="link"
                                      >
                                        The Journey to Becoming an Instagram
                                        Influencer
                                      </a>
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
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dark-card-about">
                  <div className="dark-card-about-inner">
                    <div className="dark-card-info-header">
                      <h3>About This Event</h3>
                    </div>
                    <div className="dark-card-info-body">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="icons-card-info-box">
                            <div className="icons-card-info-box-left">
                              <div className="img-thumb">
                                <img
                                  src={class_icon}
                                  className="img-fluid img-responsive img-className"
                                  alt="icon"
                                />
                              </div>
                              <div className="desc-content-div">
                                <h4>
                                  {" "}
                                  <a href="#" className="link">
                                    Live className
                                  </a>
                                </h4>
                                <p>
                                  Attend a 1 hour className, learn, and ask
                                  questions.
                                </p>
                              </div>
                            </div>

                            <div className="icons-card-info-box-right">
                              <div className="desc-content-div">
                                <p className="font-w500">
                                  Emma Scott has built an impressive Instagram
                                  following, inspiring millions of young women
                                  around the world to pursue their dreams. In
                                  this Live className, come hang out with Emma
                                  to learn all about how to grow an Instagram
                                  page and become an influencer. She’ll explain
                                  how to tackle some of your biggest fears, and
                                  work through some of the mental obstacles that
                                  may be in your way. Emma will talk about her
                                  mental strategy for approaching her goals, as
                                  well as give behind-the-scenes info on the
                                  production side of her videos, to pull the
                                  curtain back on her successful Challenge
                                  Accepted series.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dark-card-agenda">
                  <div className="dark-card-agenda-inner">
                    <div className="dark-card-info-header">
                      <h3>What's On The Agenda</h3>
                    </div>
                    <div className="dark-card-info-body">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="icons-card-info-box">
                            <div className="desc-content-div-row">
                              <h4>
                                {" "}
                                <a href="#" className="link">
                                  Intro (2 min)
                                </a>
                              </h4>
                              <p>Meet Emma + learn about ICONS!</p>
                            </div>

                            <div className="desc-content-div-row">
                              <h4>
                                {" "}
                                <a href="#" className="link">
                                  Class Lecture (40 min)
                                </a>
                              </h4>
                              <p>
                                Learn how to host a workshop style event, from
                                setup to completion.
                              </p>
                            </div>

                            <div className="desc-content-div-row">
                              <h4>
                                {" "}
                                <a href="#" className="link">
                                  Q&A (15 min)
                                </a>
                              </h4>
                              <p>Emma will take questions from the audience.</p>
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
    </>
  );
}
export default BookInfluencerleft;
