import React from 'react';
import MainBannerComponent from './MainBannerComponent';
import WorldIconComponent from './WorldIconComponent';
import WorldClassInfluenerComponent from './WorldClassInfluenerComponent';
import ExploreLiveEventComponent from './ExploreLiveEventComponent';

function IndexComponent() {
  return (
    <>
      <div className="main-middle-area">
        <section className="main-banner-section" id="main-banner-section">
          <MainBannerComponent />
        </section>

        <section className="world-icons-section" id="world-icons-section">
          <WorldIconComponent />
        </section>

        <section
          className="world-class-influencer-section"
          id="world-className-influencer-section">
          <WorldClassInfluenerComponent />
        </section>

        <section
          className="explore-live-events-section"
          id="explore-live-events-section">
          <ExploreLiveEventComponent />
        </section>
      </div>
    </>
  );
}

export default IndexComponent;
