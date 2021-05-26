import React from "react";
import event_img1 from "../../assets/images/event/event-img1.jpg";
import event_img2 from "../../assets/images/event/event-img2.jpg";

function SimilarIconsSection() {
  return (
    <>
      {" "}
      <section className="similar-icons-section" id="similar-icons-section">
        <div className="similar-icons-div">
          <div className="container-fluid container-fluid-1820">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>Similar to Emma</h3>
                  </div>
                </div>

                <div className="similar-icons-card-root">
                  <div className="inner-similar-icons">
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
                                      <a href="#" className="link">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SimilarIconsSection;
