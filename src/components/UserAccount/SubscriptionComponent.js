import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../Index/HeaderComponent";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";
import "../../assets/css/profile-style.css";
import InputComponent from "../../UI/InputComponent/InputComponent";
import { isAuthenticated } from "../../services/auth";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";
import { connect } from "react-redux";

function SubscriptionComponent() {
  let token = localStorage.getItem("token");
  const [planData, setplanData] = useState("");
  const [selectedPlanId, setselectedPlanId] = useState("");

  const planListDetails = () => {
    let url = getUrl("plan-list");
    // console.log(url);
    return get(`${url}`, `${token}`)
      .then((response) => {
        // console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              setplanData(data);
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
  const handleChoosePlan = () => {
    let url = getUrl("change-subscription");
    // console.log(url);
    var plandata = {
      subscription: selectedPlanId,
    };
    return post(`${url}`, plandata, `${token}`)
      .then((response) => {
        console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              console.log("Plan Subscribed");
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
  // console.log("user list detials", planData);
  useEffect(() => {
    planListDetails();
  }, []);
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="account-credit-card-root-inner">
          {planData &&
            planData.map((plans) => {
              return (
                <div
                  key={plans.id}
                  className={
                    selectedPlanId === plans.id
                      ? "book-button-card-box active"
                      : "book-button-card-box"
                  }
                  onClick={(e) => {
                    setselectedPlanId(plans.id);
                  }}
                >
                  <label
                    className="book-button-card-inner"
                    for={`plan-radio0${plans.id}`}
                  >
                    <div className="col-first">
                      <h3>{plans.title}</h3>
                      <div className="flex-box">
                        <div className="btn-credit-round">
                          {" "}
                          <span className="count-text">
                            {plans.number_of_credit}
                          </span>{" "}
                          <span className="span-icon">
                            {" "}
                            <i className="bg-custom-icon credit-icon-active"></i>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-desc">
                      <h4>${plans.price}/mo</h4>
                      <p>{plans.description}</p>
                    </div>
                    <span className="arrow-check-round">
                      {" "}
                      <span className="round-box">
                        {" "}
                        <i className="bg-custom-icon check-box-icon"></i>{" "}
                      </span>{" "}
                    </span>
                  </label>
                  <input
                    type="radio"
                    name="pricing-plan"
                    id={`plan-radio0${plans.id}`}
                    className="form-plan-radio d-none"
                  />
                </div>
              );
            })}
        </div>

        <div className="btn-group-div">
          <div className="btn-group-row">
            <Link
              to="#"
              className="btn btn-common-primary btn-common-primary-big btn-change-plan mr-25"
              onClick={handleChoosePlan}
            >
              CHOOSE THIS PLAN
            </Link>
            <Link
              to="/add-credits/"
              className="btn btn-common-primary btn-common-primary-big btn-add-credits"
            >
              {" "}
              ADD MORE CREDITS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscriptionComponent;
