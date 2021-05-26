import React from "react";
import CommonHeader from "./CommonHeader";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";

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
                <div class="right-side-div">
                  <div class="right-side-inner">
                    <div class="vertical-tab-content">
                      <div class="tab-content">
                        <div id="account-summary-tab" class="tab-pane fade">
                          <div class="vertical-tab-pane-inner">
                            <div class="heading-div">
                              <h1>Account summary</h1>
                            </div>

                            <div class="profile-row-tab-custom">
                              <div class="normal-custom-header-top">
                                <div class="normal-custom-heading-box">
                                  <h3>Profile</h3>
                                  <h2 class="custom-heading-h2 active">
                                    <span class="center-txt">
                                      <span class="icon-center">
                                        {" "}
                                        <i class="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span class="txt-span">PROFILE</span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div class="general-card-form-root">
                                <div class="general-card-form-top">
                                  <div class="form-custom-div">
                                    <div class="row">
                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              FULL NAME{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                type="text"
                                                class="form-control"
                                                value="Michael Lee"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              EMAIL ADDRESS{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                type="email"
                                                class="form-control"
                                                value="michael.lee@gmail.com"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              PASSWORD{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                type="password"
                                                class="form-control"
                                                value="*************"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="btn-group-div">
                                          <div class="btn-group-row">
                                            <a
                                              href="#"
                                              class="btn btn-common-primary btn-common-primary-big btn-edit-profile"
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

                            <div class="profile-row-tab-custom">
                              <div class="normal-custom-header-top">
                                <div class="normal-custom-heading-box">
                                  <h3>Current Plan</h3>
                                  <h2 class="custom-heading-h2 active">
                                    <span class="center-txt">
                                      <span class="icon-center">
                                        {" "}
                                        <i class="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span class="txt-span">PROFILE</span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div class="general-card-form-root">
                                <div class="general-card-form-top">
                                  <div class="form-custom-div">
                                    <div class="row">
                                      <div class="col-lg-12 col-md-12">
                                        <div class="plan-credits-root-div">
                                          <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                              <div class="account-credit-card-root-inner">
                                                <div class="book-button-card-box">
                                                  <div class="book-button-card-inner">
                                                    <div class="col-first">
                                                      <h3>POPULAR</h3>
                                                      <div class="flex-box">
                                                        <div class="btn-credit-round">
                                                          {" "}
                                                          <span class="count-text">
                                                            45
                                                          </span>{" "}
                                                          <span class="span-icon">
                                                            {" "}
                                                            <i class="bg-custom-icon credit-icon-active"></i>
                                                          </span>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="col-desc">
                                                      <h4>$49.95/mo</h4>
                                                      <p>
                                                        Buy 125 credits per
                                                        month and get 50% off
                                                        additional credits
                                                      </p>
                                                    </div>
                                                    <span class="arrow-right-span d-none">
                                                      {" "}
                                                      <i class="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div class="col-lg-6 col-md-6">
                                              <div class="plan-details-text-div">
                                                <div class="plan-details-text-inner">
                                                  <div class="plan-details-row">
                                                    <div class="plan-left">
                                                      <h5> Your Plan:</h5>
                                                    </div>
                                                    <div class="plan-right">
                                                      <h4>Popular</h4>
                                                    </div>
                                                  </div>
                                                  <div class="plan-details-row">
                                                    <div class="plan-left">
                                                      <h5>
                                                        {" "}
                                                        # of Credits Left:
                                                      </h5>
                                                    </div>
                                                    <div class="plan-right">
                                                      <div class="button-div">
                                                        <button class="btn-credit-round">
                                                          {" "}
                                                          <span class="span-icon">
                                                            {" "}
                                                            <i class="bg-custom-icon credit-icon-active"></i>
                                                          </span>{" "}
                                                          <span class="count-text">
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

                                      <div class="col-lg-12 col-md-12">
                                        <div class="btn-group-div">
                                          <div class="btn-group-row">
                                            <a
                                              href="#"
                                              class="btn btn-common-primary btn-common-primary-big btn-change-plan mr-25"
                                            >
                                              CHANGE PLAN
                                            </a>
                                            <a
                                              href="#"
                                              class="btn btn-common-primary btn-common-primary-big btn-add-credits"
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

                        <div
                          id="change-billing-tab"
                          class="tab-pane active show"
                        >
                          <div class="vertical-tab-pane-inner">
                            <div class="heading-div">
                              <h1>Change Billing</h1>
                            </div>

                            <div class="profile-row-tab-custom">
                              <div class="normal-custom-header-top">
                                <div class="normal-custom-heading-box">
                                  <h3>Billing</h3>
                                  <h2 class="custom-heading-h2 active">
                                    <span class="center-txt">
                                      <span class="icon-center">
                                        {" "}
                                        <i class="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span class="txt-span">
                                        CARD INFORMATION
                                      </span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div class="general-card-form-root">
                                <div class="general-card-form-top">
                                  <div class="form-custom-div">
                                    <div class="row">
                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              CARD #{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                class="number credit-card-number form-control"
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

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              EXPIRATION DATE{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                class="number month-number form-control"
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

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                          <div class="form-group-row">
                                            <label class="label-text">
                                              {" "}
                                              CVC{" "}
                                            </label>
                                            <div class="input-control-div">
                                              <input
                                                type="text"
                                                class="form-control cvv-code"
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

                                      <div class="col-lg-12 col-md-12">
                                        <div class="btn-group-div">
                                          <div class="btn-group-row">
                                            <a
                                              href="#"
                                              class="btn btn-common-primary btn-common-primary-big btn-edit-billing"
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

                        <div id="add-credits-tab" class="tab-pane fade">
                          <div class="vertical-tab-pane-inner">
                            <div class="heading-div">
                              <h1>Add Credits</h1>
                            </div>

                            <div class="profile-row-tab-custom">
                              <div class="normal-custom-header-top">
                                <div class="normal-custom-heading-box">
                                  <h3>Choose the number of credits to add</h3>
                                  <h2 class="custom-heading-h2 active">
                                    <span class="center-txt">
                                      <span class="icon-center">
                                        {" "}
                                        <i class="bg-custom-icon stopwatch-icon"></i>{" "}
                                      </span>
                                      <span class="txt-span">
                                        CARD INFORMATION
                                      </span>
                                    </span>
                                  </h2>
                                </div>
                              </div>

                              <div class="add-credits-view-root">
                                <div class="row">
                                  <div class="col-lg-4 col-md-4 add-credits-grid01">
                                    <div class="credits-left-info-div">
                                      <div class="credits-left-info-top">
                                        <h3>You have 45 credits left. </h3>
                                        <h4>Add more for the below rate:</h4>
                                      </div>

                                      <div class="credits-left-info-text-box">
                                        <div class="cl-info-row">
                                          <h2>
                                            <span class="text-span">
                                              PER CREDIT
                                            </span>
                                            <span class="number-big">
                                              $0.36
                                            </span>
                                          </h2>
                                        </div>
                                        <div class="cl-info-desc-row">
                                          <p>
                                            You’re saving 66% on the Popular
                                            Plan. You could be saving 80% by{" "}
                                            <a href="#" class="link">
                                              upgrading
                                            </a>
                                            .
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-lg-3 col-md-3 add-credits-grid02">
                                    <div class="credits-center-div">
                                      <div class="credits-center-inner">
                                        <div class="credits-plan-si active">
                                          <div class="text-div">
                                            <h4>25 CREDITS</h4>
                                          </div>
                                          <div class="btn-text-div">
                                            <div class="btn-text-row">
                                              <div class="button-div">
                                                <button class="btn btn-credit-general">
                                                  {" "}
                                                  <span class="span-icon">
                                                    {" "}
                                                    <i class="bg-custom-icon credit-icon-active"></i>
                                                  </span>{" "}
                                                  <span class="count-text">
                                                    25
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <h5> $9</h5>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="credits-plan-si">
                                          <div class="text-div">
                                            <h4>50 CREDITS</h4>
                                          </div>
                                          <div class="btn-text-div">
                                            <div class="btn-text-row">
                                              <div class="button-div">
                                                <button class="btn btn-credit-general">
                                                  {" "}
                                                  <span class="span-icon">
                                                    {" "}
                                                    <i class="bg-custom-icon credit-icon-active"></i>
                                                  </span>{" "}
                                                  <span class="count-text">
                                                    50
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <h5> $18</h5>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="credits-plan-si">
                                          <div class="text-div">
                                            <h4>75 CREDITS</h4>
                                          </div>
                                          <div class="btn-text-div">
                                            <div class="btn-text-row">
                                              <div class="button-div">
                                                <button class="btn btn-credit-general">
                                                  {" "}
                                                  <span class="span-icon">
                                                    {" "}
                                                    <i class="bg-custom-icon credit-icon-active"></i>
                                                  </span>{" "}
                                                  <span class="count-text">
                                                    75
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <h5> $27</h5>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-lg-5 col-md-5 add-credits-grid03">
                                    <div class="credit-card-input-root">
                                      <div class="account-card-root-div">
                                        <h4>
                                          You’ve selected{" "}
                                          <span class="font-bold">
                                            25 credits for $9
                                          </span>
                                          .
                                        </h4>

                                        <div class="account-card-box">
                                          <div class="account-card-box-row">
                                            <div class="icon-div">
                                              {" "}
                                              <i class="bg-custom-icon credit-card-icon"></i>{" "}
                                              <span></span>{" "}
                                            </div>
                                            <div class="card-number">
                                              {" "}
                                              <input
                                                class="number credit-card-number form-control"
                                                type="text"
                                                id="cardnumber"
                                                name="number"
                                                placeholder="Card Number"
                                                data-mask="0000 0000 0000 0000"
                                                autocomplete="off"
                                                maxlength="19"
                                              />{" "}
                                            </div>
                                            <div class="card-exp-time">
                                              {" "}
                                              <input
                                                class="number month-number form-control"
                                                type="text"
                                                id="Month-number"
                                                name="number"
                                                placeholder="MM/YY"
                                                data-mask="00/00"
                                                autocomplete="off"
                                                maxlength="5"
                                              />{" "}
                                            </div>
                                            <div class="card-cvc">
                                              {" "}
                                              <input
                                                type="text"
                                                class="form-control cvvcode"
                                                placeholder="CVC"
                                                id="cvv"
                                                maxlength="3"
                                                data-mask="000"
                                                autocomplete="off"
                                              />{" "}
                                            </div>
                                          </div>
                                        </div>

                                        <div class="btn-group-div">
                                          <div class="btn-group-row">
                                            <a
                                              href="#"
                                              class="btn btn-common-primary btn-common-primary-big btn-buy-now"
                                            >
                                              BUY NOW
                                            </a>
                                          </div>
                                        </div>

                                        <div class="desc-div">
                                          <p>
                                            By purchasing, you agree to ICON’s{" "}
                                            <a href="#" class="link">
                                              Cancellation Policy
                                            </a>
                                            ,{" "}
                                            <a href="#" class="link">
                                              Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" class="link">
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
export default ChangeBilling;
