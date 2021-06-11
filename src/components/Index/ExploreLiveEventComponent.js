import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_image from "../../assets/images/no-image03.png";
import FilterdEvents from "../../Urls/FilteredEventsapi";

function ExploreLiveEventComponent() {
  const staticData = {
    filters: [
      {
        id: 1,
        name: "FEATURED",
        value: "is_featured",
      },
      {
        id: 2,
        name: "UPCOMING",
        value: "upcoming",
      },
      {
        id: 3,
        name: "PRICE",
        value: "price",
      },
    ],
  };
  const [selectedFiltered, setselectedFiltered] = useState("is_featured");
  const [queryFilteredData, setqueryFilteredData] = useState("");
  const getFilteredData = () => {
    try {
      FilterdEvents(selectedFiltered).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == "OK") {
                // console.log(result);
                setqueryFilteredData(result.data);
              }
              break;
            case 400:
              console.log("Bad request.");
              break;
            case 401:
              console.log("Session Is Expired Please Login Again");
              break;
            case 500:
              console.log("Server error.");
              break;
            default:
              console.log(result.message);
              break;
          }
        }
      });
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };
  useEffect(() => {
    getFilteredData();
  }, [selectedFiltered]);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // console.log(selectedFiltered);
  console.log(queryFilteredData);
  return (
    <>
      <div className="explore-live-events-div">
        <div className="container-fluid container-fluid-1820">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="heading-div">
                <div className="heading-inner-div">
                  <h3>Explore Live Events</h3>
                </div>
              </div>

              <div className="events-card-root">
                <div className="tabs-root-custom">
                  <div className="tabs-header">
                    <ul className="nav nav-tabs">
                      {staticData.filters.map((filter) => {
                        return (
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={
                                selectedFiltered == filter.value
                                  ? "nav-link active show"
                                  : "nav-link "
                              }
                              onClick={(e) => {
                                setselectedFiltered(filter.value);
                              }}
                            >
                              {" "}
                              <span className="center-txt">
                                <span className="icon-center">
                                  <i className="bg-custom-icon category-icon" />
                                </span>
                                <span className="txt-span">{filter.name}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="tabs-body">
                    <div className="tab-content">
                      <div
                        id="category-live-event-tab"
                        className="tab-pane active show"
                      >
                        <div className="tab-pane-inner">
                          <div className="general-card-root">
                            <div className="row mlr-20">
                              {queryFilteredData.length != 0 ? (
                                queryFilteredData &&
                                queryFilteredData.map((data) => {
                                  return (
                                    <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                                      <div className="general-card-box">
                                        <div className="general-card-inner-box">
                                          <div className="top-image-thumb-div">
                                            <div className="img-thumb">
                                              <img
                                                src={
                                                  data.photo != null
                                                    ? data.photo
                                                    : no_image
                                                }
                                                className="img-fluid img-responsive"
                                                alt="event"
                                              />
                                            </div>
                                            <div className="top-button-div">
                                              <button className="btn btn-like">
                                                <span className="span-icon">
                                                  <i className="bg-custom-icon credit-icon-active"></i>
                                                </span>
                                                <span className="count-text">
                                                  {data.credit_required}
                                                </span>
                                              </button>
                                            </div>
                                          </div>

                                          <div className="content-div">
                                            <div className="content-top-row">
                                              <div className="left-content">
                                                <h3>
                                                  <Link
                                                    to={`/book-influencer/${data.id}`}
                                                    className="link"
                                                  >
                                                    {data.event_class.name}
                                                  </Link>
                                                </h3>
                                                <div className="time-row">
                                                  <div className="time-box">
                                                    <span className="icon-span">
                                                      <i className="bg-custom-icon calendar-icon"></i>
                                                    </span>
                                                    <span className="text">
                                                      {data.event_date_time}{" "}
                                                      {data.time_zone}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="right-content">
                                                <h4>
                                                  <a href="#" className="link">
                                                    {Capitalize(data.user.name)}
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
                                                  Only {data.remaining_spots}{" "}
                                                  spots left
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })
                              ) : (
                                <div class="heading-div ">
                                  <div class="heading-inner-div">
                                    <h3 class="no-events">No Events</h3>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="button-div">
                            <div className="button-center-div">
                              <Link
                                to="/browse"
                                className="btn btn-common-black"
                              >
                                SEE ALL
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
          </div>
        </div>
      </div>
    </>
  );
}
export default ExploreLiveEventComponent;
