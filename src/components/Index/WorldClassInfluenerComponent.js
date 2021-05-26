import React from "react";
import live_interaction from "../../assets/images/icons/live-interaction.png";
import coaching from "../../assets/images/icons/coaching.png";
import experience from "../../assets/images/icons/experience.png";

function WorldClassInfluenerComponent() {
  return (
    <>
      <div className="world-class-influencer-div">
        <div className="container-fluid container-fluid-1920">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-div">
                <div className="heading-inner-div">
                  <h3>Access to world-class influencers like never before</h3>
                </div>
              </div>

              <div className="wci-card-root">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="wci-card-box">
                      <div className="wci-card-box-inner">
                        <div className="thumb-image-div">
                          <img
                            src={live_interaction}
                            className="img-fluid img-icon-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="content-div">
                          <h3>
                            <span className="block">Live interaction with</span>
                            <span className="block"> celebrities</span>
                          </h3>
                          <p>
                            <span className="block">
                              Learn from the best in live, interactive
                            </span>
                            <span className="block">
                              class as they share their stories, insights,{" "}
                            </span>
                            <span className="block"> and insider tips.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="wci-card-box">
                      <div className="wci-card-box-inner">
                        <div className="thumb-image-div">
                          <img
                            src={coaching}
                            className="img-fluid img-icon-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="content-div">
                          <h3>
                            <span className="block">Coaching to become</span>
                            <span className="block"> the best</span>
                          </h3>
                          <p>
                            <span className="block">
                              Not a typical pre-recorded video.
                            </span>
                            <span className="block">
                              Receive direct answers in real-time.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="wci-card-box">
                      <div className="wci-card-box-inner">
                        <div className="thumb-image-div">
                          <img
                            src={experience}
                            className="img-fluid img-icon-responsive"
                            alt="img"
                          />
                        </div>
                        <div className="content-div">
                          <h3>
                            <span className="block">Flexibility to choose</span>
                            <span className="block"> from anyone</span>
                          </h3>
                          <p>
                            <span className="block">
                              Choose from a library of{" "}
                            </span>
                            <span className="block">
                              influencers and class options.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-div">
                <div className="button-center-div">
                  <a
                    href="#explore-live-events-section"
                    className="btn btn-common-primary"
                  >
                    VIEW THE EVENTS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldClassInfluenerComponent;
