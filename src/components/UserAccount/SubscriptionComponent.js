import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/profile-style.css";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";

function SubscriptionComponent(subscriptionData) {
  console.log(subscriptionData);
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
              console.log(subscriptionData.plan);
              setselectedPlanId(
                subscriptionData != '' ?  "" : subscriptionData.plan
              );
              console.log("in 200");
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
              window.location.reload();
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
  // console.log("user list detials", selectedPlanId);
  useEffect(() => {
    planListDetails();
  }, []);
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="account-credit-card-root-inner">
          {planData &&
            planData.map((plans) => {
              console.log(selectedPlanId,'-----', plans.id);
              // console.log(plans.id);
              return (
                <div
                  key={plans.id}
                  className={
                    selectedPlanId !== plans.id
                      ? "book-button-card-box "
                      : "book-button-card-box active"
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
