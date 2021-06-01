import React, { useEffect, useState } from "react";
import CommonHeader from "../UserAccount/CommonHeader";
import no_image from "../../assets/images/no-image03.png";
import { Link } from "react-router-dom";
import HeaderComponent from "../Index/HeaderComponent";
import { isAuthenticated } from "../../services/auth";
import BrowseOptions from "../../Urls/BrowseFilterapi";

function BrowseMainComponent() {
  const staticData = {
    filters: [
      {
        id: 1,
        name: "ALL",
        value: "all",
      },
      {
        id: 2,
        name: "Youtuber",
        value: "Youtuber",
      },
      {
        id: 3,
        name: "Instagrammer",
        value: "Instagrammer",
      },
      {
        id: 4,
        name: "TikToker",
        value: "TikToker",
      },
      {
        id: 5,
        name: "Facebook",
        value: "Facebook",
      },
      {
        id: 6,
        name: "Hollywood",
        value: "Hollywood",
      },
    ],
  };

  const [selectedFiltered, setselectedFiltered] = useState("all");
  const [queryFilteredData, setqueryFilteredData] = useState("");
  const getFilteredData = () => {
    try {
      BrowseOptions(selectedFiltered).then((result) => {
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
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      {isAuthenticated() ? <CommonHeader /> : <HeaderComponent />}
      <div className="main-middle-area dashboard-middle-area">
        <section className="dashboard-section" id="dashboard-section">
          <div className="dashboard-div">
            <div className="container-fluid container-fluid-1820 plr-20">
              <div className="row mlr-20">
                <div className="col-lg-12 col-md-12 plr-20">
                  <div className="icons-collapsible-card-root">
                    <div className="heading-div">
                      <div className="heading-inner-div">
                        <h3>Browse</h3>
                        <p>Get better recommendations the more you attend.</p>
                      </div>
                    </div>

                    <div className="filter-category-root-div">
                      <div className="filter-category-inner">
                        <ul className="filter-list-ul">
                          {staticData.filters.map((filter) => {
                            return (
                              <li
                                className={
                                  selectedFiltered == filter.value
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="#"
                                  className="filter-link"
                                  onClick={(e) => {
                                    setselectedFiltered(filter.value);
                                  }}
                                >
                                  {filter.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div className="inner-collapsible-icons">
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
                                            {" "}
                                            <span className="span-icon">
                                              {" "}
                                              <i className="bg-custom-icon credit-icon-active"></i>
                                            </span>{" "}
                                            <span className="count-text">
                                              {data.credit_required}
                                            </span>{" "}
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
                                                {data.user.name}
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
                                              Only {data.remaining_spots} spots
                                              left
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
                            <div className="col-lg-6 col-md-6 general-grid-6 plr-20">
                              <div className="general-card-box">
                                <div className="general-card-inner-box">
                                  <div className="top-image-thumb-div">
                                    <div className="top-button-div">
                                      No Events Found
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
          </div>
        </section>
      </div>
    </div>
  );
}
export default BrowseMainComponent;
