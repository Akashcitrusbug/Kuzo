import React from "react";
import CommonHeader from "./CommonHeader";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";

function AddCredits() {
  return (
    <div id="wrapper" classNameName="wrapper home-wrapper">
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
                        <div id="account-summary-tab" className="tab-pane fade">
                          <div className="vertical-tab-pane-inner">
                            <div className="heading-div">
                              <h1>Account summary</h1>
                            </div>

                            <div className="profile-row-tab-custom">
                              <div className="normal-custom-header-top">
                                <div className="normal-custom-heading-box">
                                  <h3>Profile</h3>
                                  <h2 className="custom-heading-h2 active">
                                    <span className="center-txt">
                                      <span className="icon-center">
                                        {" "}
                                        <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span className="txt-span">PROFILE</span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div className="general-card-form-root">
                                <div className="general-card-form-top">
                                  <div className="form-custom-div">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              FULL NAME{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                type="text"
                                                className="form-control"
                                                value="Michael Lee"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              EMAIL ADDRESS{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                type="email"
                                                className="form-control"
                                                value="michael.lee@gmail.com"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              PASSWORD{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                type="password"
                                                className="form-control"
                                                value="*************"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="btn-group-div">
                                          <div className="btn-group-row">
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-edit-profile"
                                            >
                                              EDIT PROFILE
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="profile-row-tab-custom">
                              <div className="normal-custom-header-top">
                                <div className="normal-custom-heading-box">
                                  <h3>Current Plan</h3>
                                  <h2 className="custom-heading-h2 active">
                                    <span className="center-txt">
                                      <span className="icon-center">
                                        {" "}
                                        <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span className="txt-span">PROFILE</span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div className="general-card-form-root">
                                <div className="general-card-form-top">
                                  <div className="form-custom-div">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="plan-credits-root-div">
                                          <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                              <div className="account-credit-card-root-inner">
                                                <div className="book-button-card-box">
                                                  <div className="book-button-card-inner">
                                                    <div className="col-first">
                                                      <h3>POPULAR</h3>
                                                      <div className="flex-box">
                                                        <div className="btn-credit-round">
                                                          {" "}
                                                          <span className="count-text">
                                                            45
                                                          </span>{" "}
                                                          <span className="span-icon">
                                                            {" "}
                                                            <i className="bg-custom-icon credit-icon-active"></i>
                                                          </span>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-desc">
                                                      <h4>$49.95/mo</h4>
                                                      <p>
                                                        Buy 125 credits per
                                                        month and get 50% off
                                                        additional credits
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

                                            <div className="col-lg-6 col-md-6">
                                              <div className="plan-details-text-div">
                                                <div className="plan-details-text-inner">
                                                  <div className="plan-details-row">
                                                    <div className="plan-left">
                                                      <h5> Your Plan:</h5>
                                                    </div>
                                                    <div className="plan-right">
                                                      <h4>Popular</h4>
                                                    </div>
                                                  </div>
                                                  <div className="plan-details-row">
                                                    <div className="plan-left">
                                                      <h5>
                                                        {" "}
                                                        # of Credits Left:
                                                      </h5>
                                                    </div>
                                                    <div className="plan-right">
                                                      <div className="button-div">
                                                        <button className="btn-credit-round">
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
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="btn-group-div">
                                          <div className="btn-group-row">
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-change-plan mr-25"
                                            >
                                              CHANGE PLAN
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-add-credits"
                                            >
                                              ADD MORE CREDITS
                                            </a>
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

                        <div id="change-billing-tab" className="tab-pane fade">
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

                              <div className="general-card-form-root">
                                <div className="general-card-form-top">
                                  <div className="form-custom-div">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              CARD #{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                className="number credit-card-number form-control"
                                                type="text"
                                                id="cardnumber"
                                                name="number"
                                                value="************2819"
                                                placeholder="Card Number"
                                                autocomplete="off"
                                                maxlength="19"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              EXPIRATION DATE{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                className="number month-number form-control"
                                                type="text"
                                                id="Month-number"
                                                name="number"
                                                value="1023"
                                                placeholder="MM/YY"
                                                data-mask="00/00"
                                                autocomplete="off"
                                                maxlength="5"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <div className="form-group-row">
                                            <label className="label-text">
                                              {" "}
                                              CVC{" "}
                                            </label>
                                            <div className="input-control-div">
                                              <input
                                                type="text"
                                                className="form-control cvv-code"
                                                placeholder="CVC"
                                                id="cvv"
                                                maxlength="3"
                                                value="***"
                                                autocomplete="off"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="btn-group-div">
                                          <div className="btn-group-row">
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-edit-billing"
                                            >
                                              EDIT BILLING
                                            </a>
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

                        <div
                          id="add-credits-tab"
                          className="tab-pane active show"
                        >
                          <div className="vertical-tab-pane-inner">
                            <div className="heading-div">
                              <h1>Add Credits</h1>
                            </div>

                            <div className="profile-row-tab-custom">
                              <div className="normal-custom-header-top">
                                <div className="normal-custom-heading-box">
                                  <h3>Choose the number of credits to add</h3>
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

                              <div className="add-credits-view-root">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 add-credits-grid01">
                                    <div className="credits-left-info-div">
                                      <div className="credits-left-info-top">
                                        <h3>You have 45 credits left. </h3>
                                        <h4>Add more for the below rate:</h4>
                                      </div>

                                      <div className="credits-left-info-text-box">
                                        <div className="cl-info-row">
                                          <h2>
                                            <span className="text-span">
                                              PER CREDIT
                                            </span>
                                            <span className="number-big">
                                              $0.36
                                            </span>
                                          </h2>
                                        </div>
                                        <div className="cl-info-desc-row">
                                          <p>
                                            You’re saving 66% on the Popular
                                            Plan. You could be saving 80% by{" "}
                                            <a href="#" className="link">
                                              upgrading
                                            </a>
                                            .
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-3 col-md-3 add-credits-grid02">
                                    <div className="credits-center-div">
                                      <div className="credits-center-inner">
                                        <div className="credits-plan-si active">
                                          <div className="text-div">
                                            <h4>25 CREDITS</h4>
                                          </div>
                                          <div className="btn-text-div">
                                            <div className="btn-text-row">
                                              <div className="button-div">
                                                <a href="profile-add-credits.html">
                                                  {" "}
                                                  <button className="btn btn-credit-general">
                                                    {" "}
                                                    <span className="span-icon">
                                                      {" "}
                                                      <i className="bg-custom-icon credit-icon-active"></i>
                                                    </span>{" "}
                                                    <span className="count-text">
                                                      25
                                                    </span>{" "}
                                                  </button>{" "}
                                                </a>
                                              </div>
                                              <h5> $9</h5>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="credits-plan-si">
                                          <div className="text-div">
                                            <h4>50 CREDITS</h4>
                                          </div>
                                          <div className="btn-text-div">
                                            <div className="btn-text-row">
                                              <div className="button-div">
                                                <a href="profile-add-credits2.html">
                                                  <button className="btn btn-credit-general">
                                                    {" "}
                                                    <span className="span-icon">
                                                      {" "}
                                                      <i className="bg-custom-icon credit-icon-active"></i>
                                                    </span>{" "}
                                                    <span className="count-text">
                                                      50
                                                    </span>{" "}
                                                  </button>
                                                </a>
                                              </div>
                                              <h5> $18</h5>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="credits-plan-si">
                                          <div className="text-div">
                                            <h4>75 CREDITS</h4>
                                          </div>
                                          <div className="btn-text-div">
                                            <div className="btn-text-row">
                                              <div className="button-div">
                                                <a href="profile-add-credits3.html">
                                                  <button className="btn btn-credit-general">
                                                    {" "}
                                                    <span className="span-icon">
                                                      {" "}
                                                      <i className="bg-custom-icon credit-icon-active"></i>
                                                    </span>{" "}
                                                    <span className="count-text">
                                                      75
                                                    </span>{" "}
                                                  </button>
                                                </a>
                                              </div>
                                              <h5> $27</h5>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-5 col-md-5 add-credits-grid03">
                                    <div className="credit-card-input-root">
                                      <div className="account-card-root-div">
                                        <h4>
                                          You’ve selected{" "}
                                          <span className="font-bold">
                                            25 credits for $9
                                          </span>
                                          .
                                        </h4>

                                        <div className="account-card-box">
                                          <div className="account-card-box-row">
                                            <div className="icon-div">
                                              {" "}
                                              <i className="bg-custom-icon credit-card-icon"></i>{" "}
                                              <span></span>{" "}
                                            </div>
                                            <div className="card-number">
                                              {" "}
                                              <input
                                                className="number credit-card-number form-control"
                                                type="text"
                                                id="cardnumber"
                                                name="number"
                                                placeholder="Card Number"
                                                data-mask="0000 0000 0000 0000"
                                                autocomplete="off"
                                                maxlength="19"
                                              />{" "}
                                            </div>
                                            <div className="card-exp-time">
                                              {" "}
                                              <input
                                                className="number month-number form-control"
                                                type="text"
                                                id="Month-number"
                                                name="number"
                                                placeholder="MM/YY"
                                                data-mask="00/00"
                                                autocomplete="off"
                                                maxlength="5"
                                              />{" "}
                                            </div>
                                            <div className="card-cvc">
                                              {" "}
                                              <input
                                                type="text"
                                                className="form-control cvvcode"
                                                placeholder="CVC"
                                                id="cvv"
                                                maxlength="3"
                                                data-mask="000"
                                                autocomplete="off"
                                              />{" "}
                                            </div>
                                          </div>
                                        </div>

                                        <div className="btn-group-div">
                                          <div className="btn-group-row">
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-buy-now"
                                            >
                                              BUY NOW
                                            </a>
                                          </div>
                                        </div>

                                        <div className="desc-div">
                                          <p>
                                            By purchasing, you agree to ICON’s{" "}
                                            <a href="#" className="link">
                                              Cancellation Policy
                                            </a>
                                            ,{" "}
                                            <a href="#" className="link">
                                              Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" className="link">
                                              Privacy Policy
                                            </a>
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
export default AddCredits;
