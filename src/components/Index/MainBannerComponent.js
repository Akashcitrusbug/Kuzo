import React from 'react';
import cover1 from '../../assets/images/banner-cover01.jpg';
import cover2 from '../../assets/images/banner-cover02.jpg';

function MainBannerComponent() {
  
  return (
    <>
      <div className="banner-div">
        <div className="banner-image-div">
          <div className="banner-image-group">
            <img
              src={cover1}
              className="img-fluid img-responsive-cover"
              alt="banner"
            />
          </div>
          <div className="banner-image-group">
            <img
              src={cover2}
              className="img-fluid img-responsive-cover"
              alt="banner"
            />
          </div>
        </div>

        <div className="content-banner-root">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="content-banner">
                  <div className="text-content">
                    <h1>Live classes taught by celebrity influencers</h1>
                    <div className="button-group-div">
                      <a href="#world-icons-section" className="btn btn-common">
                        MEET THE ICONS
                      </a>
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

export default MainBannerComponent;
