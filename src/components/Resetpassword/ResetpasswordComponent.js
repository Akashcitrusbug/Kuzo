import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import LoginHeaderComponent from "../Login/LoginHeaderComponent";
import InputComponent from "../../UI/InputComponent/InputComponent";
import { post } from "../../Urls/requests";
import { getUrl } from "../../Urls/urls";

function ResetpasswordComponent() {
  const history = useHistory();
  const { uid } = useParams();
  const { token } = useParams();
  const initialState = {
    password: "",
    confirm_pass: "",
  };
  const initalError = {
    passwordError: "",
    confirmpasswordError: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initalError);

  const { password, confirm_pass } = formData;
  const { passwordError, confirmpasswordError } = formError;

  const handleResetPasswordForm = (e) => {
    e.preventDefault();
    let isValid = validateForm(e);
    if (isValid) {
      const resetPAsswordData = {
        uid: uid,
        new_password1: password,
        new_password2: confirm_pass,
        token:token
      };
      const url = getUrl("reset-password");
      post(`${url}`, resetPAsswordData)
        .then((response) => {
          const {
            data: { code, status, message },
          } = response;
          switch (code) {
            case 200:
              if (status === true) {
                console.log('pasword reset successfull');
                history.push("/");
              }
              break;
            case 400:
              console.log('400 error');
              break;
            default:
              console.log('default error');
          }
        })
        .catch(() => {
          console.log('in catch');
        });
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;

    if (password === "") {
      setFormError({
        passwordError: "This Field is required",
      });
      return (isValid = false);
    }

    if (confirm_pass === "") {
      setFormError({
        confirmpasswordError: "This Field is required",
      });
      return (isValid = false);
    }
    if (password !== confirm_pass) {
      setFormError({
        confirmpasswordError: "Password does not match",
      });
      return (isValid = false);
    }

    return isValid;
  };

  const handleChange = (e) => {
    console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError({
      passwordError: "",
      confirmpasswordError: "",
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
                            <h3>Reset password </h3>
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
                                      RESET PASSWORD
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
                                              inputType="password"
                                              inputClassName="form-control"
                                              inputPlaceholder="NEW PASSWORD"
                                              inpValue={FormData.value}
                                              inputName="password"
                                              onInputChange={handleChange}
                                            />
                                            {formError.passwordError ? (
                                              <span style={{ color: "red" }}>
                                                {formError.passwordError}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                          <div className="form-group">
                                            <InputComponent
                                              inputType="password"
                                              inputClassName="form-control"
                                              inputPlaceholder="CONFIRM PASSWORD"
                                              inpValue={FormData.value}
                                              inputName="confirm_pass"
                                              onInputChange={handleChange}
                                            />
                                            {formError.confirmpasswordError ? (
                                              <span style={{ color: "red" }}>
                                                {formError.confirmpasswordError}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                          <div className="btn-group-div">
                                            <a
                                              href="login.html"
                                              className="btn btn-common-primary btn-common-primary-big btn-forgot"
                                              handleOnclick={(e) => {
                                                handleResetPasswordForm(e);
                                              }}
                                            >
                                              SUBMIT
                                            </a>
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

export default ResetpasswordComponent;
