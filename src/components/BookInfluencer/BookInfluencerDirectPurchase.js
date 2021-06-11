import React, { useEffect, useState } from "react";
import BookInfluencerleft from "./BookInfluencerleft";
import { useParams, useHistory } from "react-router-dom";
import { getUrl } from "../../Urls/urls";
import { get } from "../../Urls/requests";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_CONFIG } from "../../constants/stripeAPIkey";
import { loadStripe } from "@stripe/stripe-js";
import CardFormStripe from "./CardFormStripe";

const stripePromise = loadStripe(STRIPE_CONFIG.API_KEY);

function BookInfluencerDirectPurchase() {
  let params = useParams();
  const [iconData, seticonData] = useState("");
  const iconDetails = () => {
    let url = getUrl("event-details");
    url = url + "/" + params.id;
    return get(`${url}`)
      .then((response) => {
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
            //   console.log(data);
              seticonData(data);
              console.log("in 200 scuuess");
            }
            break;
          case 400:
            console.log("in 400");
            break;
          default:
            console.log("in default");
        }
      })
      .catch((error) => {
        console.log("in catch");
      });
  };

  useEffect(() => {
    iconDetails();
  }, [params.id]);

  return (
    <>
      <div id="wrapper" className="wrapper home-wrapper">
        <div className="main-middle-area">
          <div className="book-influencer-main-area">
            <div className="container-fluid container-fluid-1200">
              <div className="row">
                <BookInfluencerleft />
                <div className="col-lg-6 col-md-6 book-influencer-right-side">
                  <section
                    className="book-account-section"
                    id="book-account-section"
                  >
                    <div className="book-account-div">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="heading-div">
                            <div className="heading-inner-div">
                              <h3>Almost there – book now</h3>
                            </div>
                          </div>

                          <div className="book-account-root">
                            <div className="tabs-root-custom">
                              <div className="tabs-header">
                                <ul className="nav nav-tabs">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#create-account-tab"
                                    >
                                      <span className="center-txt">
                                        <span className="icon-center">
                                          {" "}
                                          <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                        </span>
                                        <span className="txt-span">
                                          CREATE ACCOUNT
                                        </span>
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active show"
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
                                    id="book-event-tab"
                                    className="tab-pane active show"
                                  >
                                    <div className="tab-pane-inner">
                                      <div className="general-book-card-root">
                                        <div className="book-tab-common-root">
                                          <div className="book-buttons-root d-none">
                                            <div className="button-div">
                                              <a
                                                href="#"
                                                className="btn btn-black-arrow-full"
                                              >
                                                PURCHASE FOR $
                                                {iconData.credit_required}{" "}
                                                <span className="arrow-right-span">
                                                  {" "}
                                                  <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                </span>{" "}
                                              </a>
                                            </div>
                                            <div className="button-div">
                                              <a
                                                href="#"
                                                className="btn btn-black-arrow-full"
                                              >
                                                ACCESS FOR $17.95{" "}
                                                <span className="arrow-right-span">
                                                  {" "}
                                                  <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                </span>{" "}
                                              </a>
                                            </div>
                                          </div>

                                          <div className="book-card-root d-none">
                                            <div className="book-button-card-box">
                                              <a
                                                href="book-influencer-book-tab-access2.html"
                                                className="btn-book-link-area"
                                              >
                                                <div className="book-button-card-inner">
                                                  <div className="col-first">
                                                    <h3>BASIC</h3>
                                                    <div className="flex-box">
                                                      <div className="btn-credit-round">
                                                        {" "}
                                                        <span className="span-icon">
                                                          {" "}
                                                          <i className="bg-custom-icon credit-icon-active"></i>
                                                        </span>{" "}
                                                        <span className="count-text">
                                                          45
                                                        </span>{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-desc">
                                                    <h4>$24.95/mo</h4>
                                                    <p>
                                                      Buy 60 credits per month
                                                      and get 30% off additional
                                                      credits
                                                    </p>
                                                  </div>
                                                  <span className="arrow-right-span">
                                                    {" "}
                                                    <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                  </span>
                                                </div>
                                              </a>
                                            </div>

                                            <div className="book-button-card-box">
                                              <a
                                                href="book-influencer-book-tab-access2.html"
                                                className="btn-book-link-area"
                                              >
                                                <div className="book-button-card-inner">
                                                  <div className="col-first">
                                                    <h3>POPULAR</h3>
                                                    <div className="flex-box">
                                                      <div className="btn-credit-round">
                                                        {" "}
                                                        <span className="span-icon">
                                                          {" "}
                                                          <i className="bg-custom-icon credit-icon-active"></i>
                                                        </span>{" "}
                                                        <span className="count-text">
                                                          125
                                                        </span>{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-desc">
                                                    <h4>$49.95/mo</h4>
                                                    <p>
                                                      Buy 125 credits per month
                                                      and get 50% off additional
                                                      credits
                                                    </p>
                                                  </div>
                                                  <span className="arrow-right-span">
                                                    {" "}
                                                    <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                  </span>
                                                </div>
                                              </a>
                                            </div>

                                            <div className="book-button-card-box">
                                              <a
                                                href="book-influencer-book-tab-access2.html"
                                                className="btn-book-link-area"
                                              >
                                                <div className="book-button-card-inner">
                                                  <div className="col-first">
                                                    <h3>PREMIUM</h3>
                                                    <div className="flex-box">
                                                      <div className="btn-credit-round">
                                                        {" "}
                                                        <span className="span-icon">
                                                          {" "}
                                                          <i className="bg-custom-icon credit-icon-active"></i>
                                                        </span>{" "}
                                                        <span className="count-text">
                                                          350
                                                        </span>{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-desc">
                                                    <h4>$89.95/mo</h4>
                                                    <p>
                                                      Buy 350 credits per month
                                                      and get 70% off additional
                                                      credits
                                                    </p>
                                                  </div>
                                                  <span className="arrow-right-span">
                                                    {" "}
                                                    <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                  </span>
                                                </div>
                                              </a>
                                            </div>

                                            <div className="bottom-book-button-row">
                                              <div className="back-button-div">
                                                <a
                                                  href="book-influencer-book-tab.html"
                                                  className="btn btn-common-black btn-back"
                                                >
                                                  BACK
                                                </a>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="book-credit-card-root d-none">
                                            <div className="book-credit-card-root-inner">
                                              <div className="book-button-card-box active">
                                                <div className="book-button-card-inner">
                                                  <div className="col-first">
                                                    <h3>POPULAR</h3>
                                                    <div className="flex-box">
                                                      <div className="btn-credit-round">
                                                        {" "}
                                                        <span className="span-icon">
                                                          {" "}
                                                          <i className="bg-custom-icon credit-icon-active"></i>
                                                        </span>{" "}
                                                        <span className="count-text">
                                                          125
                                                        </span>{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-desc">
                                                    <h4>$49.95/mo</h4>
                                                    <p>
                                                      Buy 125 credits per month
                                                      and get 50% off additional
                                                      credits
                                                    </p>
                                                  </div>
                                                  <span className="arrow-right-span d-none">
                                                    {" "}
                                                    <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <Elements stripe={stripePromise}>
                                            <CardFormStripe />
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
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookInfluencerDirectPurchase;
