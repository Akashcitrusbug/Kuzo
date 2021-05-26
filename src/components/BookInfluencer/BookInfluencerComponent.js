import React from "react";
import BookInfluencerleft from "./BookInfluencerleft";
import LoginHeaderComponent from "../Login/LoginHeaderComponent";
import BookInfluencerRight from "./BookInfluencerRight";

function BookInfluencerComponent() {
  return (
    <div id="wrapper" className="wrapper home-wrapper">
      <LoginHeaderComponent />

      <div className="main-middle-area">
        <div className="book-influencer-main-area">
          <div className="container-fluid container-fluid-1200">
            <div className="row">
              <BookInfluencerleft />

              <BookInfluencerRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookInfluencerComponent;
