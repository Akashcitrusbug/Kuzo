import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import InputComponent from "../../UI/InputComponent/InputComponent";
import EmailRegx from "../../PatternCheck/EmailRegx";
import { getUrl } from "../../Urls/urls";
import { get, post } from "../../Urls/requests";

function BookInfluencerRight() {
  const token = localStorage.getItem("token");
  const history = useHistory();
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
  const staticData = {
    titles: [
      {
        id: 1,
        name: "CREATE ACCOUNT",
        value: "create_acc",
      },
      {
        id: 2,
        name: "BOOK",
        value: "book",
      },
    ],
  };
  let params = useParams();
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
              seticonData(data);
              // console.log(data);
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

  const handleBookClick = () => {
    let url = getUrl("book-event-credit");
    console.log(url);
    var eventData = {
      event: params.id,
    };
    return post(`${url}`, eventData, `${token}`)
      .then((response) => {
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              // seticonData(data);
              // console.log(data);
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
      // console.log(url);
      signUpAPICall(url, registerData);
      console.log("Your account has been createdz");
    } else {
      console.log("sorry please try agin");
    }
  };

  const handleChange = (e) => {
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

  const signUpAPICall = (url, registerData) => {
    post(`${url}`, registerData)
      .then((response) => {
        const {
          data: { code, status, message },
        } = response;
        switch (code) {
          case 201:
            if (status === "OK") {
              localStorage.setItem("staylogin", stayLoginCheck);
              localStorage.setItem("fullname", fullname);
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
              history.push(`/login`);
            }
            break;
          case 400:
            console.log(" in 400");
            break;
          case 200:
            console.log(message);
            break;
          default:
            console.log("in default");
        }
      })
      .catch(() => {
        console.log("in catch");
      });
  };
  var direct_purchase_url = "/book-influencer-direct/" + params.id + "/"
  return (
    <>
      <div className="col-lg-6 col-md-6 book-influencer-right-side">
        <section className="book-account-section" id="book-account-section">
          <div className="book-account-div">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>Create an account to book</h3>
                  </div>
                </div>

                <div className="book-account-root">
                  <div className="tabs-root-custom">
                    <div className="tabs-header">
                      <ul className="nav nav-tabs">
                        {staticData.titles.map((title) => {
                          return (
                            <li className="nav-item">
                              <Link
                                className="nav-link show"
                                to="#"
                                // onClick={}
                              >
                                <span className="center-txt">
                                  <span className="icon-center">
                                    {" "}
                                    <i className="bg-custom-icon stopwatch-icon"></i>{" "}
                                  </span>
                                  <span className="txt-span">{title.name}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="tabs-body">
                      <div className="tab-content">
                        {isAuthenticated() == null ? (
                          <div
                            id="create-account-tab"
                            className="tab-pane active show"
                          >
                            <div className="tab-pane-inner">
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
                                              <Link to="#" className="link">
                                                Terms of Service{" "}
                                              </Link>
                                              and
                                              <Link to="#" className="link">
                                                {" "}
                                                Privacy Policy
                                              </Link>
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
                        ) : (
                          <div
                            id="book-event-tab"
                            className="tab-pane active show"
                          >
                            <div className="tab-pane-inner">
                              <div className="general-card-root">
                                <div
                                  id="book-event-tab"
                                  className="tab-pane active show"
                                >
                                  <div className="tab-pane-inner">
                                    <div className="general-book-card-root">
                                      <div className="book-tab-common-root">
                                        <div className="book-buttons-root">
                                          <div className="button-div">
                                            <Link
                                              to={direct_purchase_url}
                                              className="btn btn-black-arrow-full"
                                            >
                                              PURCHASE FOR $ {iconData.price}{" "}
                                              <span className="arrow-right-span">
                                                {" "}
                                                <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                              </span>{" "}
                                            </Link>
                                          </div>
                                          <div className="button-div">
                                            <Link
                                              to="#"
                                              className="btn btn-black-arrow-full"
                                              onClick={handleBookClick}
                                            >
                                              BOOK THROUGH CREDITS{" "}
                                              {iconData.credit_required}{" "}
                                              <span className="arrow-right-span">
                                                {" "}
                                                <i className="bg-custom-icon arrow-right-side-icon"></i>{" "}
                                              </span>{" "}
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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
export default BookInfluencerRight;
