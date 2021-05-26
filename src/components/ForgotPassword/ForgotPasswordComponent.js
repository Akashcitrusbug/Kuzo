import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginHeaderComponent from "../Login/LoginHeaderComponent";
import InputComponent from "../../UI/InputComponent/InputComponent";
import EmailRegx from "../../PatternCheck/EmailRegx";
import { post } from "../../Urls/requests";
import { getUrl } from "../../Urls/urls";

function ForgotPasswordComponent() {
  const history = useHistory();
  const initialState = {
    email: "",
  };
  const initalError = {
    emailError: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initalError);

  const { email } = formData;
  const { emailError } = formError;

  const handleForgotPasswordFormSubmit = (e) => {
    e.preventDefault();
    let isValid = validateForm(e);
    if (isValid) {
      setFormError("");
      const forgotPasswordData = {
        email: email,
      };
      console.log(forgotPasswordData);
      const url = getUrl("forgot-password");
      post(`${url}`, forgotPasswordData)
        .then((response) => {
          const {
            data: { code, status, message },
          } = response;
          console.log(response);
          switch (code) {
            case 200:
              if (status === true) {
                console.log("Successfully sent link");
              }
              break;
            case 400:
              console.log("400 error");
              break;
            default:
              console.log("default case");
          }
        })
        .catch(() => {
          console.log("in catch");
        });
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;
    if (email === "") {
      setFormError({
        emailError: "This Field is required",
      });
      return (isValid = false);
    }

    if (!EmailRegx.test(email)) {
      setFormError({
        emailError: "Invalid Email",
      });
      return (isValid = false);
    }

    return isValid;
  };

  const handleChange = (e) => {
    // console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError({
      emailError: "",
    });
  };
  return (
    <div>
      <LoginHeaderComponent />
      <div className="main-middle-area">
        <div className="auth-main-area login-main-area">
          <div className="container-fluid container-fluid-1200">
            <div className="row center-row-justify">
              <div className="col-lg-6 col-md-6 auth-center-side">
                <section className="auth-account-section" id="login-section">
                  <div className="auth-account-div">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="heading-div">
                          <div className="heading-inner-div">
                            <h3>Forgot password</h3>
                          </div>
                        </div>

                        <div className="auth-account-root">
                          <div className="auth-root-custom">
                            <div className="normal-custom-header">
                              <div className="normal-custom-heading-box">
                                <h2 className="custom-heading-h2 active">
                                  <span className="center-txt">
                                    <span className="icon-center">
                                      {" "}
                                      <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                    </span>
                                    <span className="txt-span">
                                      FORGOT PASSWORD
                                    </span>
                                  </span>
                                </h2>
                              </div>
                            </div>

                            <div className="auth-body">
                              <div className="auth-content">
                                <div className="general-card-form-root">
                                  <div className="general-card-form-top">
                                    <div className="form-custom-div">
                                      <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                          <div className="form-group">
                                            <InputComponent
                                              inputType="email"
                                              inputPlaceholder="EMAIL ADDRESS"
                                              inputClassName="form-control"
                                              inputName="email"
                                              inpValue={formData.value}
                                              onInputChange={handleChange}
                                            />
                                            {formError.emailError ? (
                                              <span style={{ color: "red" }}>
                                                {formError.emailError}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                          <div className="btn-group-div">
                                            <Link
                                              to="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-forgot"
                                              onClick={(e) => {
                                                handleForgotPasswordFormSubmit(
                                                  e
                                                );
                                              }}
                                            >
                                              SEND
                                            </Link>
                                          </div>

                                          <div className="general-card-form-bottom">
                                            <div className="color-row01">
                                              <p>
                                                BACK TO{" "}
                                                <Link
                                                  to="/login"
                                                  className="link-underline"
                                                >
                                                  LOG IN
                                                </Link>
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordComponent;
