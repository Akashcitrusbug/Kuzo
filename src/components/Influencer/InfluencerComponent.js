import React, { useEffect, useState } from "react";
import FooterComponent from "../Index/FooterComponent";
import HeaderComponent from "../Index/HeaderComponent";
import no_image from "../../assets/images/no-image03.png";
import influencer_img2 from "../../assets/images/influencer-ule-01.jpg";
import influencer_img3 from "../../assets/images/influencer-ule-02.jpg";
import { Link, useParams } from "react-router-dom";
import { getUrl } from "../../Urls/urls";
import { get } from "../../Urls/requests";

const InfluencerComponent = () => {
  let params = useParams();
  const [iconData, seticonData] = useState("");
  const [offerData, setofferData] = useState("");
  const [similarEventData, setsimilarEventData] = useState("");
  const [upcomingEventData, setupcomingEventData] = useState("");
  const [userData, setuserData] = useState("");
  const [influencerData, setinfluencerData] = useState("");
  const [aboutData, setaboutData] = useState("");
  const [photoData, setphotoData] = useState("");
  // console.log(params);
  const iconDetails = () => {
    console.log("in icon detail");
    let url = getUrl("influencer-details");
    url = url + "/" + params.id;
    console.log(url);
    return get(`${url}`)
      .then((response) => {
        const {
          data: { code, data, status, message },
        } = response;
        console.log(data);
        switch (code) {
          case 200:
            if (status === "OK") {
              // seticonData(data);
              setuserData(data[0].user);
              setsimilarEventData(data[0].similar_events);
              setupcomingEventData(data[0].upcoming_events);
              setofferData(data[0].offer);
              setinfluencerData(data[0].influencer);
              setaboutData(data[0].about);
              setphotoData(data[0].photo);
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
  console.log(similarEventData, "similarEventData");
  console.log(upcomingEventData, "upcomingEventData");
  return (
    <div id="wrapper" classNameName="wrapper home-wrapper">
      <HeaderComponent />
      <div className="main-middle-area">
        <section
          className="single-influencer-icons-section"
          id="single-influencer-icons-section"
        >
          <div className="single-influencer-icons-div">
            <div className="container container-1100">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="single-influencer-icons-info-div">
                    <div className="single-influencer-icons-info-row">
                      <div className="left-thumb-div">
                        <div className="video-icon-box-relative">
                          <div
                            className="thumb-box"
                            data-toggle="modal"
                            data-target="#video-influencer-modal"
                          >
                            <img
                              src={photoData != null ? photoData : ""}
                              className="img-fluid img-responsive"
                              alt="icons"
                            />
                          </div>
                          <div
                            className="abs-br-div"
                            data-toggle="modal"
                            data-target="#video-influencer-modal"
                          >
                            <a href="#" className="abs-icon-link">
                              <span className="rounded-icon-span">
                                {" "}
                                <i className="bg-custom-icon play-video-icon"></i>{" "}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="right-content-div">
                        <div className="content-div">
                          <div className="content-top-row">
                            <div className="left-content">
                              <h3>
                                <a href="#" className="link">
                                  {userData.name}
                                </a>
                              </h3>
                              <p>{influencerData.name}</p>
                            </div>
                          </div>

                          <div className="desc-row">
                            <p>{aboutData}</p>

                            <div className="button-div">
                              {/* <Link
                                to="/book-influencer"
                                className="btn btn-common-primary"
                              >
                                SEE CLASSES
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="single-influencer-right-side">
                      <div className="single-influencer-right-side-inner">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="dark-card-info-box">
                              <div className="dark-card-info-inner">
                                <div className="dark-card-info-header">
                                  <h3>What does {userData.name} offer?</h3>
                                </div>
                                <div className="dark-card-info-body">
                                  <div className="row">
                                    {offerData &&
                                      offerData.map((offer) => {
                                        return (
                                          <div className="col-lg-6 col-md-6">
                                            <div className="icons-card-info-box">
                                              <div className="img-thumb">
                                                <img
                                                  src={offer.offer.icon}
                                                  className="img-fluid img-responsive img-className"
                                                  alt="icon"
                                                />
                                              </div>
                                              <div className="desc-content-div">
                                                <h4>
                                                  {" "}
                                                  <a href="#" className="link">
                                                    {offer.offer.title}
                                                  </a>
                                                </h4>
                                                <p>{offer.offer.description}</p>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="similar-icons-card-root">
                              <div className="heading-div">
                                <div className="heading-inner-div">
                                  <h3>Upcoming Live Events</h3>
                                </div>
                              </div>

                              <div className="pre-available-div">
                                <h4>See What's Available</h4>
                              </div>

                              <div className="inner-similar-icons">
                                <div className="general-card-root-icons">
                                  <div className="row mlr-20">
                                    <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                      <div className="general-card-box-icons">
                                        <div className="general-card-inner-box">
                                          <div className="top-image-thumb-div">
                                            <div className="img-thumb">
                                              <img
                                                src={influencer_img2}
                                                className="img-fluid img-responsive"
                                                alt="event"
                                              />
                                            </div>
                                            <div className="top-button-div">
                                              <button className="btn btn-like">
                                                {" "}
                                                <span className="span-icon">
                                                  {" "}
                                                  <i className="bg-custom-icon credit-icon-active"></i>
                                                </span>{" "}
                                                <span className="count-text">
                                                  45
                                                </span>{" "}
                                              </button>
                                            </div>
                                          </div>

                                          <div className="content-div">
                                            <div className="content-top-row">
                                              <div className="center-content">
                                                <h3>
                                                  <a href="#" className="link">
                                                    The Journey to Becoming an
                                                    Instagram Influencer
                                                  </a>
                                                </h3>
                                                <div className="time-row">
                                                  <div className="time-box">
                                                    <span className="icon-span">
                                                      <i className="bg-custom-icon calendar-icon"></i>
                                                    </span>
                                                    <span className="text">
                                                      Sat, Sept 12 &#x2022;
                                                      10:00 AM EST
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="spots-row">
                                              <div className="spots-box">
                                                <span className="icon-span">
                                                  <i className="bg-custom-icon spot-alert-icon"></i>
                                                </span>
                                                <span className="text">
                                                  Only 3 spots left
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                      <div className="general-card-box-icons">
                                        <div className="general-card-inner-box">
                                          <div className="top-image-thumb-div">
                                            <div className="img-thumb">
                                              <img
                                                src={influencer_img3}
                                                className="img-fluid img-responsive"
                                                alt="event"
                                              />
                                            </div>
                                            <div className="top-button-div">
                                              <button className="btn btn-like">
                                                {" "}
                                                <span className="span-icon">
                                                  {" "}
                                                  <i className="bg-custom-icon credit-icon-active"></i>
                                                </span>{" "}
                                                <span className="count-text">
                                                  90
                                                </span>{" "}
                                              </button>
                                            </div>
                                          </div>

                                          <div className="content-div">
                                            <div className="content-top-row">
                                              <div className="center-content">
                                                <h3>
                                                  <a href="#" className="link">
                                                    Meet and Greet with Emma
                                                  </a>
                                                </h3>
                                                <div className="time-row">
                                                  <div className="time-box">
                                                    <span className="icon-span">
                                                      <i className="bg-custom-icon calendar-icon"></i>
                                                    </span>
                                                    <span className="text">
                                                      Sat, Sept 12 &#x2022; 9:00
                                                      AM EST
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="spots-row">
                                              <div className="spots-box">
                                                <span className="icon-span">
                                                  <i className="bg-custom-icon spot-alert-icon"></i>
                                                </span>
                                                <span className="text">
                                                  Only 1 spots left
                                                </span>
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

                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="dark-card-desc-box">
                              <div className="dark-card-info-inner">
                                <div className="dark-card-info-header">
                                  <h3>How does this work?</h3>
                                </div>
                                <div className="dark-card-info-body">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="desc-content-div">
                                        <p>
                                          Emma Scott has built an impressive
                                          Instagram following, inspiring
                                          millions of young women around the
                                          world to pursue their dreams. In her
                                          Instagram, she connects with her fans
                                          in a unique way that captures their
                                          hearts. She understands the today’s
                                          trends and leverages the tools of
                                          social media to spread her positive
                                          message.
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
          </div>
        </section>
        <section className="similar-icons-section" id="similar-icons-section">
          <div className="similar-icons-div">
            <div className="container-fluid container-fluid-1820">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-div">
                    <div className="heading-inner-div">
                      <h3>Similar to {userData.name}</h3>
                    </div>
                  </div>

                  <div className="similar-icons-card-root">
                    <div className="inner-similar-icons">
                      <div className="general-card-root">
                        <div className="row mlr-20">
                          {similarEventData &&
                            similarEventData.map((eventData) => {
                              return (
                                <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                  <div className="general-card-box">
                                    <div className="general-card-inner-box">
                                      <div className="top-image-thumb-div">
                                        <div className="img-thumb">
                                          <img
                                            src={
                                              eventData.photo != null
                                                ? eventData.photo
                                                : no_image
                                            }
                                            className="img-fluid img-responsive"
                                            alt="event"
                                          />
                                          {/* {eventData} */}
                                        </div>
                                        <div className="top-button-div">
                                          <button className="btn btn-like">
                                            {" "}
                                            <span className="span-icon">
                                              {" "}
                                              <i className="bg-custom-icon credit-icon-active"></i>
                                            </span>{" "}
                                            <span className="count-text">
                                              {eventData.credit_required}
                                            </span>{" "}
                                          </button>
                                        </div>
                                      </div>

                                      <div className="content-div">
                                        <div className="content-top-row">
                                          <div className="left-content">
                                            <h3>
                                              <a href="#" className="link">
                                                {eventData.event_class.name}
                                              </a>
                                            </h3>
                                            <div className="time-row">
                                              <div className="time-box">
                                                <span className="icon-span">
                                                  <i className="bg-custom-icon calendar-icon"></i>
                                                </span>
                                                <span className="text">
                                                  {eventData.event_date_time}{" "}
                                                  {eventData.time_zone}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="right-content">
                                            <h4>
                                              <a href="#" className="link">
                                                {eventData.user.name}
                                              </a>
                                            </h4>
                                            <p>Instagram</p>
                                          </div>
                                        </div>
                                        <div className="spots-row">
                                          <div className="spots-box">
                                            <span className="icon-span">
                                              <i className="bg-custom-icon spot-alert-icon"></i>
                                            </span>
                                            <span className="text">
                                              Only {eventData.remaining_spots}{" "}
                                              spots left
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
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
      <FooterComponent />
    </div>
  );
};
export default InfluencerComponent;
