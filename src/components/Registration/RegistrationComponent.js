import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import InputComponent from "../../UI/InputComponent/InputComponent";
import LoginHeaderComponent from "../Login/LoginHeaderComponent";
import EmailRegx from "../../PatternCheck/EmailRegx";
import { post } from "../../Urls/requests";
import { getUrl } from "../../Urls/urls";

function RegistrationComponent() {
  const history = useHistory();
  const passwdRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_-{}[]])(?=.*\d)[a-zA-Z\d]{8,}$/
  );

  const initialState = {
    fullname: "",
    email: "",
    password: "",
  };
  const initalError = {
    fullnameError: "",
    emailError: "",
    passwordError: "",
  };
  const [stayLoginCheck, setStayLoginCheck] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initalError);

  const { fullname, email, password } = formData;
  const { fullnameError, emailError, passwrordError } = formError;

  const signUpAPICall = (url, registerData) => {
    post(`${url}`, registerData)
      .then((response) => {
        const {
          data: { code, status, message },
        } = response;
        console.log(response);
        switch (code) {
          case 201:
            if (status === true) {
              toast.success(message, {
                pauseOnHover: false,
                position: toast.POSITION.TOP_RIGHT,
              });
              localStorage.setItem("staylogin", stayLoginCheck);
              localStorage.setItem("fullname", fullname);
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
              history.push(`/login`);
              // deleteCookie("proCode");
            }
            break;
          case 400:
            toast.error(message, {
              pauseOnHover: false,
              position: toast.POSITION.TOP_RIGHT,
            });
            break;
          default:
            toast.error(message, {
              pauseOnHover: false,
              position: toast.POSITION.TOP_RIGHT,
            });
        }
      })
      .catch(() => {
        toast.error("Something went wrong", {
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;
    if (fullname.trim() === "") {
      setFormError({
        fullnameError: "This Field is required",
      });
      return (isValid = false);
    }

    if (email.trim() === "") {
      setFormError({
        emailError: "This Field is required",
      });
      return (isValid = false);
    }

    if (password.trim() === "") {
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
    // if (!passwdRegex.test(password)) {
    //   setFormError({
    //     passwordError:
    //       "Please use a Capital letter, a small letter and a number in your password.",
    //   });
    //   return (isValid = false);
    // }

    return isValid;
  };

  const handleChange = (e) => {
    // console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError({
      fullnameError: "",
      emailError: "",
      passwordError: "",
    });
  };

  const create_account = (e) => {
    let isFormValid = validateForm(e);
    if (isFormValid) {
      setFormError("");
      const registerData = JSON.stringify({
        name: fullname,
        email: email,
        password: password,
      });
      const url = getUrl("create_account");
      console.log(url);
      signUpAPICall(url, registerData);
      console.log("Your account has been createdz");
    } else {
      console.log("sorry please try agin");
    }
  };
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      <LoginHeaderComponent />
      <div className="main-middle-area">
        <div className="auth-main-area create-an-account-main-area">
          <div className="container-fluid container-fluid-1200">
            <div className="row center-row-justify">
              <div className="col-lg-5 col-md-6 auth-center-side">
                <section
                  className="auth-account-section"
                  id="create-an-account-section"
                >
                  <div className="auth-account-div">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="heading-div">
                          <div className="heading-inner-div">
                            <h3>Get started with ICONS</h3>
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
                                      CREATE ACCOUNT
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
                                              inputType="text"
                                              inputPlaceholder="FULL NAME"
                                              inputClassName="form-control"
                                              inputName="fullname"
                                              inpValue={formData.value}
                                              onInputChange={handleChange}
                                            />
                                            {formError.fullnameError ? (
                                              <span style={{ color: "red" }}>
                                                {formError.fullnameError}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>

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
                                          <div className="form-group">
                                            <InputComponent
                                              inputType="password"
                                              inputPlaceholder="PASSWORD"
                                              inputClassName="form-control"
                                              inputName="password"
                                              inpValue={formData.value}
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
                                          <div className="btn-group-div">
                                            <a
                                              href="#"
                                              className="btn btn-common-primary btn-common-primary-big btn-create-account"
                                              onClick={create_account}
                                            >
                                              CREATE ACCOUNT
                                            </a>
                                          </div>

                                          <div className="general-card-form-bottom">
                                            <div className="color-row01">
                                              <p>
                                                ALREADY HAVE AN ACCOUNT?{" "}
                                                <Link
                                                  to="/login"
                                                  className="link-underline"
                                                >
                                                  LOG IN
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
                                                By creating an account you agree
                                                to ICON's{" "}
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

export default RegistrationComponent;
