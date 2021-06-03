import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { Link } from "react-router-dom";
import HeaderComponent from "../Index/HeaderComponent";
import ProfileAccountLeftMenu from "./ProfileAccountLeftMenu";
import "../../assets/css/profile-style.css";
import InputComponent from "../../UI/InputComponent/InputComponent";
import { isAuthenticated } from "../../services/auth";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";
import { connect } from "react-redux";
import { setCredits } from "../../redux/userAction";
import SubscriptionComponent from "./SubscriptionComponent";

function AccountSummary() {
  let token = localStorage.getItem("token");

  const [userListData, setuserListData] = useState([""]);
  const [subscriptionData, setsubscriptionData] = useState([""]);

  const userListDetails = () => {
    let url = getUrl("profile-details");
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
              setuserListData(data);
              setsubscriptionData(data.subscription)
              console.log('in 200');
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
  // console.log("user list detials", subscriptionData);

  const handleEditProfile = () => {
    const url = getUrl("profile-update");
  };

  // console.log("user list detials", planData);
  useEffect(() => {
    userListDetails();
  }, []);

  return (
    <>
      {isAuthenticated() ? <CommonHeader /> : <HeaderComponent />}
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
                          id="account-summary-tab"
                          className="tab-pane active show"
                        >
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
                                              <InputComponent
                                                inputType="text"
                                                inputPlaceholder="Enter Name"
                                                inputName="acc_name"
                                                inputClassName="form-control"
                                                inpValue={
                                                  userListData.user
                                                    ? userListData.user.name
                                                    : ""
                                                }
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
                                              <InputComponent
                                                inputType="email"
                                                inputPlaceholder="Email"
                                                inputName="email"
                                                inputClassName="form-control disable"
                                                inpDisabled="true"
                                                inpValue={
                                                  userListData.user
                                                    ? userListData.user.email
                                                    : ""
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-12 col-md-12">
                                        <div className="btn-group-div">
                                          <div className="btn-group-row">
                                            <Link
                                              to="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-edit-profile"
                                              onClick={handleEditProfile}
                                            >
                                              EDIT PROFILE
                                            </Link>
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
                                            <SubscriptionComponent plan={subscriptionData.id}/>
                                            <div className="col-lg-6 col-md-6">
                                              <div className="plan-details-text-div">
                                                <div className="plan-details-text-inner">
                                                  <div className="plan-details-row">
                                                    <div className="plan-left">
                                                      <h5> Your Plan:</h5>
                                                    </div>
                                                    <div className="plan-right">
                                                      <h4>
                                                        {" "}
                                                        {userListData.subscription !=
                                                        null
                                                          ? userListData.subscription.title
                                                          : "No Plan"}
                                                      </h4>
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
                                                            {userListData.user
                                                              ? userListData.credit
                                                              : ""}
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
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCredits: (payload) => dispatch(setCredits(payload)),
});

export default connect("", mapDispatchToProps)(AccountSummary);
// export default AccountSummary;
