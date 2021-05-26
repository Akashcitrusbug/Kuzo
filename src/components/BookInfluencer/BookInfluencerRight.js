import React from "react";
import { Link } from "react-router-dom";

function BookInfluencerRight() {
  return (
    <>
      <div className="col-lg-6 col-md-6 book-influencer-right-side">
        <section className="book-account-section" id="book-account-section">
          <div className="book-account-div">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>Create an account to book</h3>
                  </div>
                </div>

                <div className="book-account-root">
                  <div className="tabs-root-custom">
                    <div className="tabs-header">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active show"
                            data-toggle="tab"
                            href="#create-account-tab"
                          >
                            <span className="center-txt">
                              <span className="icon-center">
                                {" "}
                                <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                              </span>
                              <span className="txt-span">CREATE ACCOUNT</span>
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="book-influencer-book-tab.html"
                          >
                            <span className="center-txt">
                              <span className="icon-center">
                                {" "}
                                <i className="bg-custom-icon price-tag-icon"></i>{" "}
                              </span>
                              <span className="txt-span">BOOK</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tabs-body">
                      <div className="tab-content">
                        <div
                          id="create-account-tab"
                          className="tab-pane active show"
                        >
                          <div className="tab-pane-inner">
                            <div className="general-card-form-root">
                              <div className="general-card-form-top">
                                <div className="form-custom-div">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="FULL NAME"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="EMAIL ADDRESS"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="PASSWORD"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                      <div className="btn-group-div">
                                        <a
                                          href="#"
                                          className="btn btn-common-primary btn-common-primary-big"
                                        >
                                          CREATE ACCOUNT
                                        </a>
                                      </div>

                                      <div className="general-card-form-bottom">
                                        <div className="color-row01">
                                          <p>
                                            ALREADY HAVE AN ACCOUNT?{" "}
                                            <Link
                                              to="/login"
                                              className="link-underline"
                                            >
                                              LOG IN
                                            </Link>
                                          </p>
                                        </div>
                                        <div className="center-row01">
                                          <Link
                                            to="/forgot-password"
                                            className="link"
                                          >
                                            Forgot your password?
                                          </Link>
                                        </div>
                                        <div className="left-row01">
                                          <p>
                                            By creating an account you agree to
                                            ICON's{" "}
                                            <Link to="#" className="link">
                                              Terms of Service{" "}
                                            </Link>
                                            and
                                            <Link to="#" className="link">
                                              {" "}
                                              Privacy Policy
                                            </Link>
                                            .
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

                        <div id="book-event-tab" className="tab-pane fade">
                          <div className="tab-pane-inner">
                            <div className="general-card-root"></div>
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
export default BookInfluencerRight;
