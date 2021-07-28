import React from 'react';

import mainBgVideo from '../assets/media/main-bg.mp4';
import Banner from '../components/Banner';
import ArrowNavigationProvider from '../contexts/ArrowNavigation';

function MainPage() {
  return (
    <div className="main">
      <video className="main-video" autoPlay muted loop>
        <source src={mainBgVideo} type="video/mp4" />
      </video>
      <ArrowNavigationProvider initialActiveElement={[2, 2]}>
        <Banner />
      </ArrowNavigationProvider>
    </div>
  );
}

export default MainPage;
