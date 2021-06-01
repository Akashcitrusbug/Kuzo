import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUrl } from "../../Urls/urls";
import { get } from "../../Urls/requests";
import no_image from "../../assets/images/no-image03.png";

function BookInfluencerleft() {
  let params = useParams();
  const [iconData, seticonData] = useState("");
  const [offerData, setofferData] = useState("");
  const [eventClassData, seteventClassData] = useState("");
  const [upcomingEventData, setupcomingEventData] = useState("");
  const [userData, setuserData] = useState("");
  const [aboutData, setaboutData] = useState("");
  const [photoData, setphotoData] = useState("");
  const iconDetails = () => {
    // console.log("in icon detail");
    let url = getUrl("event-details");
    url = url + "/" + params.id;
    // console.log(url);
    return get(`${url}`)
      .then((response) => {
        const {
          data: { code, data, status, message },
        } = response;
        // console.log(data);
        switch (code) {
          case 200:
            if (status === "OK") {
              seticonData(data);
              setuserData(data.user);
              seteventClassData(data.event_class);
              setofferData(data.event_offer[0].offer);
              setupcomingEventData(data.upcoming_events);
              setaboutData(data.about);
              setphotoData(data.photo);
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
  // console.log(iconData);
  // console.log(offerData);

  return (
    <>
      {" "}
      <div className="col-lg-6 col-md-6 book-influencer-left-side">
        <section
          className="book-influencer-section"
          id="book-influencer-section"
        >
          <div className="book-influencer-div">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>
                      This event starts in{" "}
                      <span
                        className="text countdown-text"
                        id="countdown-timer"
                      ></span>
                    </h3>
                  </div>
                </div>

                <div className="bi-icons-card-root">
                  <div className="bi-similar-icons">
                    <div className="general-card-root">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 general-grid-6">
                          <div className="general-card-box">
                            <div className="general-card-inner-box">
                              <div className="top-image-thumb-div">
                                <div className="img-thumb">
                                  <img
                                    src={
                                      photoData != null ? photoData : no_image
                                    }
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
                                      {iconData.credit_required}
                                    </span>{" "}
                                  </button>
                                </div>
                              </div>

                              <div className="content-div">
                                <div className="content-top-row">
                                  <div className="left-content">
                                    <h3>
                                      <a
                                        href="influencer.html"
                                        className="link"
                                      >
                                        {eventClassData.name}
                                      </a>
                                    </h3>
                                    <div className="time-row">
                                      <div className="time-box">
                                        <span className="icon-span">
                                          <i className="bg-custom-icon calendar-icon"></i>
                                        </span>
                                        <span className="text">
                                          {iconData.event_date_time}{" "}
                                          {iconData.time_zone}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="right-content">
                                    <h4>
                                      <a href="#" className="link">
                                        {userData.name}
                                      </a>
                                    </h4>
                                    {/* <p>Instagram</p> */}
                                  </div>
                                </div>
                                <div className="spots-row">
                                  <div className="spots-box">
                                    <span className="icon-span">
                                      <i className="bg-custom-icon spot-alert-icon"></i>
                                    </span>
                                    <span className="text">
                                      Only {iconData.remaining_spots} spots left
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

                <div className="dark-card-about">
                  <div className="dark-card-about-inner">
                    <div className="dark-card-info-header">
                      <h3>About This Event</h3>
                    </div>
                    <div className="dark-card-info-body">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="icons-card-info-box">
                            <div className="icons-card-info-box-left">
                              <div className="img-thumb">
                                <img
                                  src={offerData.icon}
                                  className="img-fluid img-responsive img-className"
                                  alt="icon"
                                />
                              </div>
                              <div className="desc-content-div">
                                <h4>
                                  {" "}
                                  <a href="#" className="link">
                                    {offerData.title}
                                  </a>
                                </h4>
                                <p>{offerData.description}</p>
                              </div>
                            </div>

                            <div className="icons-card-info-box-right">
                              <div className="desc-content-div">
                                <p className="font-w500">{aboutData}</p>
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
export default BookInfluencerleft;
