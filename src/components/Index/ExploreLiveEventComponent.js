import React from "react";
import { Link } from "react-router-dom";
import event_img1 from "../../assets/images/event/event-img1.jpg";
import event_img2 from "../../assets/images/event/event-img2.jpg";
import event_img3 from "../../assets/images/event/event-img3.jpg";
import event_img4 from "../../assets/images/event/event-img4.jpg";

export default function ExploreLiveEventComponent() {
  return (
    <>
      <div className="explore-live-events-div">
        <div className="container-fluid container-fluid-1820">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-div">
                <div className="heading-inner-div">
                  <h3>Explore Live Events</h3>
                </div>
              </div>

              <div className="events-card-root">
                <div className="tabs-root-custom">
                  <div className="tabs-header">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#category-live-event-tab"
                        >
                          <span className="center-txt">
                            <span className="icon-center">
                              <i className="bg-custom-icon category-icon" />
                            </span>
                            <span className="txt-span">FEATURED</span>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#upcoming-live-event-tab"
                        >
                          <span className="center-txt">
                            <span className="icon-center">
                              <i className="bg-custom-icon stopwatch-icon" />
                            </span>
                            <span className="txt-span">UPCOMING</span>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#price-live-event-tab"
                        >
                          <span className="center-txt">
                            <span className="icon-center">
                              <i className="bg-custom-icon price-tag-icon"></i>
                            </span>
                            <span className="txt-span">PRICE</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="tabs-body">
                    <div className="tab-content">
                      <div
                        id="category-live-event-tab"
                        className="tab-pane active show"
                      >
                        <div className="tab-pane-inner">
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
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">45</span>
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
                                                Sat, Sept 12 &#x2022; 10:00 AM
                                                EST
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
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">38</span>
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
                                                Sun, Sept 13 &#x2022; 1:00 PM
                                                EST
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
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">41</span>
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
                                                Tues, Sept 15 &#x2022; 8:00 PM
                                                EST
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
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">29</span>
                                        </button>
                                      </div>
                                    </div>

                                    <div className="content-div">
                                      <div className="content-top-row">
                                        <div className="left-content">
                                          <h3>
                                            <a href="#" className="link">
                                              My Rise to 1,000,000,000 Plays on
                                              Tik Tok
                                            </a>
                                          </h3>
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-icon"></i>
                                              </span>
                                              <span className="text">
                                                Wed, Sept 16 &#x2022; 6:00 PM
                                                EST
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

                          <div className="button-div">
                            <div className="button-center-div">
                              <Link
                                to="/browse"
                                className="btn btn-common-black"
                              >
                                SEE ALL
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="upcoming-live-event-tab"
                        className="tab-pane fade"
                      >
                        <div className="tab-pane-inner">
                          <div className="general-card-root">
                            <div className="row mlr-20">
                              <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                <div className="general-card-box">
                                  <div className="general-card-inner-box">
                                    <div className="top-image-thumb-div">
                                      <div className="img-thumb">
                                        <img
                                          src="assets/images/event/event-img1.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">45</span>
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
                                                Sat, Sept 12 &#x2022; 10:00 AM
                                                EST
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
                                          src="assets/images/event/event-img2.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">38</span>
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
                                                Sun, Sept 13 &#x2022; 1:00 PM
                                                EST
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
                                          src="assets/images/event/event-img3.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">41</span>
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
                                                Tues, Sept 15 &#x2022; 8:00 PM
                                                EST
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
                                          src="assets/images/event/event-img4.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">29</span>
                                        </button>
                                      </div>
                                    </div>

                                    <div className="content-div">
                                      <div className="content-top-row">
                                        <div className="left-content">
                                          <h3>
                                            <a href="#" className="link">
                                              My Rise to 1,000,000,000 Plays on
                                              Tik Tok
                                            </a>
                                          </h3>
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-icon"></i>
                                              </span>
                                              <span className="text">
                                                Wed, Sept 16 &#x2022; 6:00 PM
                                                EST
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

                          <div className="button-div">
                            <div className="button-center-div">
                              <Link
                                to="/browse"
                                className="btn btn-common-black"
                              >
                                SEE ALL
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="price-live-event-tab" className="tab-pane fade">
                        <div className="tab-pane-inner">
                          <div className="general-card-root">
                            <div className="row mlr-20">
                              <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                <div className="general-card-box">
                                  <div className="general-card-inner-box">
                                    <div className="top-image-thumb-div">
                                      <div className="img-thumb">
                                        <img
                                          src="assets/images/event/event-img1.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">45</span>
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
                                                Sat, Sept 12 &#x2022; 10:00 AM
                                                EST
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
                                          src="assets/images/event/event-img2.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">38</span>
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
                                                Sun, Sept 13 &#x2022; 1:00 PM
                                                EST
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
                                          src="assets/images/event/event-img3.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">41</span>
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
                                                Tues, Sept 15 &#x2022; 8:00 PM
                                                EST
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
                                          src="assets/images/event/event-img4.jpg"
                                          className="img-fluid img-responsive"
                                          alt="event"
                                        />
                                      </div>
                                      <div className="top-button-div">
                                        <button className="btn btn-like">
                                          <span className="span-icon">
                                            <i className="bg-custom-icon credit-icon-active"></i>
                                          </span>
                                          <span className="count-text">29</span>
                                        </button>
                                      </div>
                                    </div>

                                    <div className="content-div">
                                      <div className="content-top-row">
                                        <div className="left-content">
                                          <h3>
                                            <a href="#" className="link">
                                              My Rise to 1,000,000,000 Plays on
                                              Tik Tok
                                            </a>
                                          </h3>
                                          <div className="time-row">
                                            <div className="time-box">
                                              <span className="icon-span">
                                                <i className="bg-custom-icon calendar-icon"></i>
                                              </span>
                                              <span className="text">
                                                Wed, Sept 16 &#x2022; 6:00 PM
                                                EST
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

                          <div className="button-div">
                            <div className="button-center-div">
                              <Link
                                to="/browse"
                                className="btn btn-common-black"
                              >
                                SEE ALL
                              </Link>
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
    </>
  );
}
