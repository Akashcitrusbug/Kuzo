import React, { useEffect, useState } from "react";
import BookInfluencerleft from "./BookInfluencerleft";
import { useParams, useHistory } from "react-router-dom";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_CONFIG } from "../../constants/stripeAPIkey";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(STRIPE_CONFIG.API_KEY);

function CardFormStripe() {
  let params = useParams();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const token = localStorage.getItem("token");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

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
              console.log(data);
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

  const handlePurchase = async (e) => {
    let url = getUrl("book-event");
    const cardNumberElement = elements.getElement(CardNumberElement);
    console.log(cardNumberElement);

    const result = await stripe.createToken(cardNumberElement);

    if (result.error) {
      console.log("[ERROR]", result.error);
    } else {
      console.log("[CARD-TOKEN]", result.token.id);
    }
    console.log(url);
    var eventData = {
      event: params.id,
      is_subscription_access: "true",
      subscription: 1,
      stripe_token: result.token.id,
    };
    return post(`${url}`, eventData, `${token}`)
      .then((response) => {
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              console.log(data);
              console.log("in 200 scuuess");
              history.push("/browse/");
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
  return (
    // <Elements stripe={stripePromise}>
    <div className="book-credit-card-root ticket-credit-card-root">
      <div className="book-credit-card-root-inner">
        <div className="book-button-card-box active">
          <div className="book-button-card-inner">
            <div className="col-first">
              <h3>TICKET</h3>
              <div className="flex-box">
                <div className="btn-credit-round color-white">
                  {" "}
                  <span className="count-text">
                    ${iconData.credit_required}
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-desc col-desc2">
              <p className="mb-2">
                The Journey to Becoming an Instagram Influencer
              </p>
              <p>Sat, Sept 12 • 10:00 AM EST</p>
            </div>
            <span className="arrow-right-span d-none">
              {" "}
              <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
            </span>
          </div>
        </div>

        <div className="account-card-root-div">
          <div className="account-card-box">
            <div className="account-card-box-row">
              <div className="icon-div">
                {" "}
                <i className="bg-custom-icon credit-card-icon"></i>{" "}
                <span></span>{" "}
              </div>
              <div class="card-number">
                <CardNumberElement
                  className="number credit-card-number form-control"
                  id="cardnumber"
                  name="number"
                  placeholder="XXXX XXXX XXXX XXXX"
                  data-mask="0000 0000 0000 0000"
                  autoComplete="off"
                  maxLength="16"
                  onChange={(e) => {
                    setCardNumber(e.complete);
                  }}
                  options={{
                    style: {
                      base: {
                        fontSize: "20px",
                        color: "#ffffff",
                        "::placeholder": {
                          color: "#4e5278",
                        },
                      },
                      invalid: {
                        color: "red",
                      },
                    },
                  }}
                />
              </div>

              <div className="card-exp-time">
                {" "}
                <CardExpiryElement
                  className="number month-number form-control"
                  id="Month-number"
                  name="number"
                  data-mask="00/00"
                  autoComplete="off"
                  maxLength="5"
                  onChange={(e) => {
                    setExpiry(e.complete);
                  }}
                  options={{
                    style: {
                      base: {
                        fontSize: "20px",
                        color: "#ffffff",
                        "::placeholder": {
                          color: "#4e5278",
                        },
                      },
                      invalid: {
                        color: "red",
                      },
                    },
                  }}
                />
              </div>
              <div className="card-cvc">
                {" "}
                <CardCvcElement
                  className="form-control cvv-code"
                  id="cvv"
                  name="number"
                  maxLength="3"
                  data-mask="000"
                  autoComplete="off"
                  onChange={(e) => {
                    setCvc(e.complete);
                  }}
                  options={{
                    style: {
                      base: {
                        fontSize: "20px",
                        color: "#ffffff",
                        "::placeholder": {
                          color: "#4e5278",
                        },
                      },
                      invalid: {
                        color: "red",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="desc-div">
            <p>
              By purchasing, you agree to ICON's Cancellation Policy, and you
              agree that ICONS and/or Emma Scott may use images or video of you
              participating in this event in content including promotional
              materials.
            </p>
          </div>
        </div>

        <div className="bottom-book-button-row">
          <div className="back-button-div">
            <a
              href="book-influencer-book-tab.html"
              className="btn btn-common-black btn-back mr-10"
            >
              BACK
            </a>
          </div>
          <div className="right-button-div">
            <a
              href="#"
              className="btn btn-common-primary btn-common-small-42"
              onClick={handlePurchase}
            >
              PURCHASE
            </a>
          </div>
        </div>
      </div>
    </div>
    // </Elements>
  );
}

export default CardFormStripe;
