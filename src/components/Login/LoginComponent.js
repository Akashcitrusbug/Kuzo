import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import InputComponent from "../../UI/InputComponent/InputComponent";
import LoginHeaderComponent from "./LoginHeaderComponent";
import EmailRegx from "../../PatternCheck/EmailRegx";
import { post } from "../../Urls/requests";
import { getUrl } from "../../Urls/urls";
import { toast } from "react-toastify";

function LoginComponent() {
  const history = useHistory();
  const initialState = {
    email: "",
    password: "",
  };
  const initalError = {
    emailError: "",
    passwordError: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initalError);

  const { email, password } = formData;
  const { emailError, passwrordError } = formError;

  const login = (e) => {
    let isFormValid = validateForm(e);
    if (isFormValid) {
      setFormError("");
      let url = getUrl("login");
      console.log(url);
      var loginData = {
        email: email,
        password: password,
      };
      post(`${url}`, loginData)
        .then((response) => {
          console.log(response,'---------------------');
          const {
            data: { code, data, status, message },
          } = response;
          switch (code) {
            case 200:
              if (status === 'OK') {
                localStorage.setItem("token", data.token);

                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                localStorage.setItem("data", JSON.stringify(data));

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
    } else {
      console.log("sorry please try agin");
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

    if (password === "") {
      setFormError({
        passwordError: "This Field is required",
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
      passwordError: "",
    });
  };

  return (
    <>
      <div id="wrapper" className="wrapper home-wrapper">
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
                              <h3>Log in</h3>
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
                                        LOG IN TO EXISTING ACCOUNT
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
                                                inputType="EMAIL"
                                                inputClassName="form-control"
                                                inputPlaceholder="EMAIL ADDRESS"
                                                inpValue={FormData.value}
                                                inputName="email"
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
                                            <div className="form-group">
                                              <InputComponent
                                                inputType="password"
                                                inputClassName="form-control"
                                                inputPlaceholder="PASSWORD"
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
                                            <div className="btn-group-div mt-15">
                                              <a
                                                href="#"
                                                className="btn btn-common-primary btn-common-primary-big btn-login"
                                                onClick={login}
                                              >
                                                LOG IN
                                              </a>
                                            </div>

                                            <div className="general-card-form-bottom">
                                              <div className="color-row01">
                                                <p>
                                                  NO ACCOUNT?{" "}
                                                  <Link
                                                    to="/registration"
                                                    className="link-underline"
                                                  >
                                                    CREATE AN ACCOUNT
                                                  </Link>
                                                </p>
                                              </div>
                                              <div className="center-row01">
                                                <Link
                                                  to="/forgot-password"
                                                  className="link"
                                                >
                                                  Forgot your password?
                                                </Link>
                                              </div>
                                              <div className="left-row01">
                                                <p>
                                                  By providing an email address,
                                                  you agree that ICONS may
                                                  contact you with updates
                                                  related to ICONS events, and
                                                  for research or marketing
                                                  purposes. You may always opt
                                                  out by unsubscribing to the
                                                  email list. By logging in, you
                                                  agree to our{" "}
                                                  <a href="#" className="link">
                                                    Privacy Policy
                                                  </a>{" "}
                                                  and{" "}
                                                  <a href="#" className="link">
                                                    Terms of Service
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
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
