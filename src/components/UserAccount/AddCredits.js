import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { Elements } from "@stripe/react-stripe-js";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";
import { Link, useHistory } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { STRIPE_CONFIG } from "../../constants/stripeAPIkey";
import { loadStripe } from "@stripe/stripe-js";

import AddCreditsRightSide from "./AddCreditsRightSide";

const stripePromise = loadStripe(STRIPE_CONFIG.API_KEY);

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
                <Elements stripe={stripePromise}>
                  <AddCreditsRightSide />
                </Elements>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AddCredits;
