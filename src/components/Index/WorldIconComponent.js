import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import icon_image_2 from "../../assets/images/icons-slider-img/icons-img-02.jpg";
import { Link } from "react-router-dom";
import { getUrl } from "../../Urls/urls";
import { get } from "../../Urls/requests";

function WorldIconComponent() {
  let token = localStorage.getItem("token");
  const [iconListData, seticonListData] = useState("");
  const iconListDetails = () => {
    let url = getUrl("popular-influencer-list");
    return get(`${url}`, `${token}`)
      .then((response) => {
        // console.log(response);
        const {
          data: { code, data, status, message },
        } = response;
        switch (code) {
          case 200:
            if (status === "OK") {
              seticonListData(data);
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
  useEffect(() => {
    iconListDetails();
  }, []);

  // console.log(iconListData);
  return (
    <>
      <div className="world-icons-div">
        <div className="heading-div">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-inner-div">
                  <h2>Meet and Learn from the World's Icons</h2>
                  <div className="text-center-715">
                    <p>
                      Join a <b>live, virtual className</b> taught by an expert
                      influencer with millions of followers. Meet the{" "}
                      <b>top celebrities</b> from{" "}
                      <a href="#" className="link">
                        YouTube
                      </a>
                      ,{" "}
                      <a href="#" className="link">
                        TikTok
                      </a>
                      ,{" "}
                      <a href="#" className="link">
                        Instagram
                      </a>
                      , and{" "}
                      <a href="#" className="link">
                        Hollywood
                      </a>{" "}
                      from the comfort of your couch. You can even ask a
                      question and have it answered by our experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-slider-main-div">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="owl-slider-main-link">
                  <div className="link-right-box">
                    <Link to="browse" className="link link-white">
                      see all
                    </Link>
                  </div>
                </div>

                <div className="owl-slider-main-slider">
                  <OwlCarousel
                    className="owl-carousel owl-theme owl-world-icons"
                    id="owl-world-icons"
                    loop={true}
                    margin={20}
                    nav={false}
                    dots={false}
                    stagePadding={0}
                    autoPlay={true}
                    smartSpeed={2000}
                    responsiveClass={true}
                    responsive={{
                      0: {
                        items: 1,
                        autoplay: true,
                        center: true,
                        margin: 3,
                      },
                      600: {
                        items: 2.3,
                      },
                      1200: {
                        items: 3.1,
                      },
                      1600: {
                        items: 4.8,
                      },
                    }}
                  >
                    {iconListData &&
                      iconListData.map((influencerData) => {
                        return (
                          <div className="item" key={influencerData.id}>
                            <div className="icons-slider-box">
                              <Link
                                to={`/influencer/${influencerData.user.id}`}
                                className="link slider-link-box"
                              >
                                <div className="icons-thumb-image">
                                  <div className="img-thumb">
                                    {" "}
                                    <img
                                      src={
                                        influencerData
                                          ? influencerData.photo
                                          : icon_image_2
                                      }
                                      className="img-fluid img-responsive"
                                      alt="icons"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="icons-content-div">
                                  <h5>{influencerData.user.name}</h5>
                                  <h3>{influencerData.follower} FOLLOWERS</h3>
                                  <h4>{influencerData.influencer.name}</h4>
                                </div>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldIconComponent;
