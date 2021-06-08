import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";

function CardForm() {
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
  const [cardAddedSuccess, setcardAddedSuccess] = useState(false);

  let token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      setCardNumber("");
      setExpiry("");
      setCvc("");

      // if (!stripe || !elements) {
      //   return;
      // }

      const cardNumberElement = elements.getElement(CardNumberElement);
      // console.log(cardNumberElement);

      const result = await stripe.createToken(cardNumberElement);
      // console.log(result);

      if (result.error) {
        console.log("[ERROR]", result.error);
      } else {
        console.log("[CARD-TOKEN]", result.token);
        // let response='';
        let url = getUrl("billing-update");
        let data = {
          source: result.token.id,
        };
        return post(`${url}`, data, token)
          .then((response) => {
            // console.log(response);
            const {
              data: { code, data, status, message },
            } = response;
            switch (code) {
              case 200:
                if (status === "OK") {
                  // setuserListData(data);
                  setcardAddedSuccess(true);
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

  const userCardDetails = () => {
    let url = getUrl("billing-details");
    return get(`${url}`, `${token}`)
      .then((response) => {
        console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        console.log(data);
        switch (code) {
          case 200:
            if (status === "OK") {
              setuserCardData(data);
              var cardumber = "XXXX XXXX XXXX " + data[0].last4;
              setCardNumber(cardumber);
              setExpiry(data[0].card_expiration_date);
              setCvc("...");
            }
            break;
          case 400:
            console.log("400 error");
            break;
          default:
            console.log("default error");
            break;
        }
      })
      .catch((error) => {
        console.log("in catch");
      });
  };
  // setCardNumber(userCardData[0].last4)
  //   console.log(userCardData[0].last4);
  // // if (userCardData){
  //     var carnumber = 'XXXX XXXX XXXX ' + userCardData[0].last4
  //     setCardNumber(carnumber)
  // }

  useEffect(() => {
    userCardDetails();
  }, []);

  return (
    <>
      <div className="general-card-form-root">
        <div style={{ color: "blue" }}>
          {cardAddedSuccess ? "Card Details updateD successfully" : ""}
        </div>
        <div className="general-card-form-top">
          <div className="form-custom-div">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <div className="form-group-row">
                    <label className="label-text"> CARD # </label>
                    <div className="input-control-div">
                      <CardNumberElement
                        className="number credit-card-number form-control"
                        id="cardnumber"
                        name="number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        data-mask="0000 0000 0000 0000"
                        autoComplete="off"
                        maxLength="16"
                        value={cardNumber}
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
                      {Object.keys(cardNumberErr).map((key, index) => {
                        return (
                          <span key={index} style={{ color: "red" }}>
                            {cardNumberErr[key]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <div className="form-group-row">
                    <label className="label-text"> EXPIRATION DATE </label>
                    <div className="input-control-div">
                      <CardExpiryElement
                        className="number month-number form-control"
                        id="Month-number"
                        name="number"
                        data-mask="00/00"
                        autoComplete="off"
                        maxLength="5"
                        value={expiry}
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
                      {Object.keys(expiryErr).map((key, index) => {
                        return (
                          <span key={index} style={{ color: "red" }}>
                            {expiryErr[key]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <div className="form-group-row">
                    <label className="label-text"> CVC </label>
                    <div className="input-control-div">
                      <CardCvcElement
                        className="form-control cvv-code"
                        id="cvv"
                        name="number"
                        maxLength="3"
                        data-mask="000"
                        autoComplete="off"
                        value={cvc}
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
                      {Object.keys(cvcErr).map((key, index) => {
                        return (
                          <span key={index} style={{ color: "red" }}>
                            {cvcErr[key]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="btn-group-div">
                  <div className="btn-group-row">
                    <a
                      onClick={handleSubmit}
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
    </>
  );
}

export default CardForm;
