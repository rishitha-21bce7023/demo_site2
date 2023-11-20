import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnterSite }) => {
  return (
    <div className='demo1'>
    <div className="landing-page">
      <h1 className="demo">
        Found Your <br />Beloved Pet
      </h1>
      <p className="demo-text">
        Lost and Found pets - a second chance for happiness.<br /> Every lost pet deserves a homecoming story.
      </p>
      <button onClick={onEnterSite}>Enter Site</button>
    </div>
    </div>
  );
};

export default LandingPage;

