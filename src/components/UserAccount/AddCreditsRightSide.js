import React, { useEffect, useState } from "react";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";
import { Link, useHistory } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function AddCreditsRightSide() {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNumberErr, setCardNumberErr] = useState({});
  const [expiryErr, setExpiryErr] = useState({});
  const [cvcErr, setCvcErr] = useState({});
  const [userCardData, setuserCardData] = useState("");
  const [creditList, setcreditList] = useState("");
  const [selectedCredit, setselectedCredit] = useState("");
  const [selectedCreditNumber, setselectedCreditNumber] = useState("");
  const [selectedCreditPrice, setselectedCreditPrice] = useState("");

  let token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      console.log(isValid);
      setCardNumber("");
      setExpiry("");
      setCvc("");
      //   console.log(stripe, elements);
      //   if (!stripe || !elements) {
      //     return;
      //     console.log('sdfsdfsd');
      //   }

      const cardNumberElement = elements.getElement(CardNumberElement);
      console.log(cardNumberElement);

      const result = await stripe.createToken(cardNumberElement);
      console.log("hi");
      if (result.error) {
        console.log("[ERROR]", result.error);
      } else {
        console.log("[CARD-TOKEN]", result.token);
        // let response='';
        let url = getUrl("add-credits");
        console.log(url, "=====");
        let data = {
          stripe_token: result.token.id,
          credit: selectedCredit,
        };
        return post(`${url}`, data, token)
          .then((response) => {
            console.log(response);
            const {
              data: { code, data, status, message },
            } = response;
            switch (code) {
              case 200:
                if (status === "OK") {
                  // setuserListData(data);
                  console.log("OKokOOKOKOKOKO");
                }
                break;
              case 400:
                console.log("400 error");
                break;
              default:
                console.log("default error");
            }
          })
          .catch((error) => {
            console.log("i catrch");
          });
        // history.push("/success");
      }
    }
  };
  const formValidation = () => {
    const numberErr = {};
    const exErr = {};
    const cErr = {};
    let isValid = true;

    if (cardNumber == false) {
      numberErr.cardNumberRequired = "Enter your card number properly!";
      isValid = false;
    }

    if (expiry == false) {
      exErr.expiryRequired = "Enter your card expiry properly!";
      isValid = false;
    }

    if (cvc == false) {
      cErr.cvcRequired = "Enter your card cvc properly!";
      isValid = false;
    }

    setCardNumberErr(numberErr);
    setExpiryErr(exErr);
    setCvcErr(cErr);
    return isValid;
  };

  const creditListData = () => {
    let url = getUrl("credits");
    // console.log(url);
    return get(`${url}`, `${token}`)
      .then((response) => {
        console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              setcreditList(data);
            }
            break;
          case 400:
            console.log("400 error");
            break;
          default:
            console.log("default error");
        }
      })
      .catch((error) => {
        console.log("in catch");
      });
  };

  useEffect(() => {
    creditListData();
  }, []);

  return (
    <>
      {" "}
      <div className="right-side-div">
        <div className="right-side-inner">
          <div className="vertical-tab-content">
            <div className="tab-content">
              <div id="add-credits-tab" className="tab-pane active show">
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
                            <span className="txt-span">CARD INFORMATION</span>
                          </span>
                        </h2>
                      </div>
                    </div>

                    <div className="add-credits-view-root">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 add-credits-grid01">
                          <div className="credits-left-info-div">
                            <div className="credits-left-info-top">
                              <h3>You have 0 credits left. </h3>
                              <h4>Add more for the below rate:</h4>
                            </div>

                            <div className="credits-left-info-text-box">
                              <div className="cl-info-row">
                                <h2>
                                  <span className="text-span">PER CREDIT</span>
                                  <span className="number-big">$0.36</span>
                                </h2>
                              </div>
                              <div className="cl-info-desc-row">
                                <p>
                                  You’re saving 66% on the Popular Plan. You
                                  could be saving 80% by{" "}
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
                              {creditList &&
                                creditList.map((credits) => {
                                  return (
                                    <div
                                      className= {selectedCredit === credits.id ? 'credits-plan-si active' : 'credits-plan-si'}
                                      key={credits.id}
                                      onClick={(e) => {
                                          setselectedCredit(credits.id)
                                          setselectedCreditNumber(credits.number_of_credit)
                                          setselectedCreditPrice(credits.price)
                                      }}
                                      data-key={credits.id}
                                    >
                                      <div className="text-div">
                                        <h4>{credits.number_of_credit} CREDITS</h4>
                                      </div>
                                      <div className="btn-text-div">
                                        <div className="btn-text-row">
                                          <div className="button-div">
                                            <a href="#">
                                              {" "}
                                              <button className="btn btn-credit-general">
                                                {" "}
                                                <span className="span-icon">
                                                  {" "}
                                                  <i className="bg-custom-icon credit-icon-active"></i>
                                                </span>{" "}
                                                <span className="count-text">
                                                  {credits.number_of_credit}
                                                </span>{" "}
                                              </button>{" "}
                                            </a>
                                          </div>
                                          <h5> ${credits.price}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-5 add-credits-grid03">
                          <div className="credit-card-input-root">
                            <div className="account-card-root-div">
                              <h4>
                                You’ve selected{" "}
                                <span className="font-bold">
                                    {selectedCredit ? `${selectedCreditNumber} credits for $ ${selectedCreditPrice}` : '0 credits for $0'}
                                  {/* 25 credits for $9 */}
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
                                    <CardNumberElement
                                      className="number credit-card-number form-control"
                                      type="text"
                                      id="cardnumber"
                                      name="number"
                                      placeholder="Card Number"
                                      data-mask="0000 0000 0000 0000"
                                      autocomplete="off"
                                      maxlength="16"
                                      value={cardNumber}
                                      onChange={(e) => {
                                        setCardNumber(e.complete);
                                      }}
                                    />{" "}
                                  </div>

                                  <div className="card-exp-time">
                                    {" "}
                                    <CardExpiryElement
                                      className="number month-number form-control"
                                      type="text"
                                      id="Month-number"
                                      name="number"
                                      placeholder="MM/YY"
                                      data-mask="00/00"
                                      autocomplete="off"
                                      maxlength="5"
                                      value={expiry}
                                      onChange={(e) => {
                                        setExpiry(e.complete);
                                      }}
                                    />{" "}
                                  </div>

                                  <div className="card-cvc">
                                    {" "}
                                    <CardCvcElement
                                      type="text"
                                      className="form-control cvvcode"
                                      placeholder="CVC"
                                      id="cvv"
                                      maxlength="3"
                                      data-mask="000"
                                      autocomplete="off"
                                      value={cvc}
                                      onChange={(e) => {
                                        setCvc(e.complete);
                                      }}
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                              {Object.keys(cardNumberErr).map((key, index) => {
                                return (
                                  <span key={index} style={{ color: "red" }}>
                                    {cardNumberErr[key]}
                                  </span>
                                );
                              })}
                              <br />
                              {Object.keys(expiryErr).map((key, index) => {
                                return (
                                  <span key={index} style={{ color: "red" }}>
                                    {expiryErr[key]}
                                  </span>
                                );
                              })}
                              <br />
                              {Object.keys(cvcErr).map((key, index) => {
                                return (
                                  <span key={index} style={{ color: "red" }}>
                                    {cvcErr[key]}
                                  </span>
                                );
                              })}
                              <br />

                              <div className="btn-group-div">
                                <div className="btn-group-row">
                                  <a
                                    href="#"
                                    className="btn btn-common-primary btn-common-primary-big btn-buy-now"
                                    onClick={handleSubmit}
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
    </>
  );
}

export default AddCreditsRightSide;
