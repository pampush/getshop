import React from 'react';

import mainBgVideo from '../assets/media/main-bg.mp4';
import Banner from '../components/Banner';

function MainScreen() {
  return (
    <div className="main">
      <video className="main-video" autoPlay muted loop>
        <source src={mainBgVideo} type="video/mp4" />
      </video>
      <Banner />
    </div>
  );
}

export default MainScreen;
