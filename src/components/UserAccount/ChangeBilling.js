import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CommonHeader from "./CommonHeader";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";
import { STRIPE_CONFIG } from "../../constants/stripeAPIkey";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "./CardForm";

const stripePromise = loadStripe(STRIPE_CONFIG.API_KEY);

function ChangeBilling() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      <CommonHeader />
      <div className="main-middle-area profile-middle-area">
        <section className="profile-section" id="profile-section">
          <div className="profile-div">
            <div className="profile-root-div">
              <div className="profile-root-row">
                <ProfileAccountLeftMenu />
                <div className="right-side-div">
                  <div className="right-side-inner">
                    <div className="vertical-tab-content">
                      <div className="tab-content">
                        <div
                          id="change-billing-tab"
                          className="tab-pane active show"
                        >
                          <div className="vertical-tab-pane-inner">
                            <div className="heading-div">
                              <h1>Change Billing</h1>
                            </div>

                            <div className="profile-row-tab-custom">
                              <div className="normal-custom-header-top">
                                <div className="normal-custom-heading-box">
                                  <h3>Billing</h3>
                                  <h2 className="custom-heading-h2 active">
                                    <span className="center-txt">
                                      <span className="icon-center">
                                        {" "}
                                        <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span className="txt-span">
                                        CARD INFORMATION
                                      </span>
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <Elements stripe={stripePromise}>
                                <CardForm />
                              </Elements>
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
export default ChangeBilling;
